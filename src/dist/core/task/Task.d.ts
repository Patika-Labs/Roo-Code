import EventEmitter from "events";
import { Anthropic } from "@anthropic-ai/sdk";
import { type TaskLike, type TaskMetadata, type TaskEvents, type ProviderSettings, type TokenUsage, type ToolUsage, type ToolName, type ContextCondense, type ContextTruncation, type ClineMessage, type ClineSay, type ClineAsk, type ToolProgressStatus, type HistoryItem, type CreateTaskOptions, type ModelInfo, type ToolProtocol, TaskStatus, TodoItem, QueuedMessage } from "@roo-code/types";
import { ApiHandler } from "../../api";
import { ApiStream } from "../../api/transform/stream";
import { ClineApiReqCancelReason } from "../../shared/ExtensionMessage";
import { ClineAskResponse } from "../../shared/WebviewMessage";
import { DiffStrategy } from "../../shared/tools";
import { UrlContentFetcher } from "../../services/browser/UrlContentFetcher";
import { BrowserSession } from "../../services/browser/BrowserSession";
import { RepoPerTaskCheckpointService } from "../../services/checkpoints";
import { DiffViewProvider } from "../../integrations/editor/DiffViewProvider";
import { RooTerminalProcess } from "../../integrations/terminal/types";
import { ToolRepetitionDetector } from "../tools/ToolRepetitionDetector";
import { FileContextTracker } from "../context-tracking/FileContextTracker";
import { RooIgnoreController } from "../ignore/RooIgnoreController";
import { RooProtectedController } from "../protect/RooProtectedController";
import { type AssistantMessageContent } from "../assistant-message";
import { AssistantMessageParser } from "../assistant-message/AssistantMessageParser";
import { ClineProvider } from "../webview/ClineProvider";
import { type ApiMessage } from "../task-persistence";
import { type CheckpointDiffOptions, type CheckpointRestoreOptions } from "../checkpoints";
import { MessageQueueService } from "../message-queue/MessageQueueService";
import { MessageManager } from "../message-manager";
export interface TaskOptions extends CreateTaskOptions {
    provider: ClineProvider;
    apiConfiguration: ProviderSettings;
    enableDiff?: boolean;
    enableCheckpoints?: boolean;
    checkpointTimeout?: number;
    enableBridge?: boolean;
    fuzzyMatchThreshold?: number;
    consecutiveMistakeLimit?: number;
    task?: string;
    images?: string[];
    historyItem?: HistoryItem;
    experiments?: Record<string, boolean>;
    startTask?: boolean;
    rootTask?: Task;
    parentTask?: Task;
    taskNumber?: number;
    onCreated?: (task: Task) => void;
    initialTodos?: TodoItem[];
    workspacePath?: string;
    /** Initial status for the task's history item (e.g., "active" for child tasks) */
    initialStatus?: "active" | "delegated" | "completed";
}
export declare class Task extends EventEmitter<TaskEvents> implements TaskLike {
    readonly taskId: string;
    readonly rootTaskId?: string;
    readonly parentTaskId?: string;
    childTaskId?: string;
    pendingNewTaskToolCallId?: string;
    readonly instanceId: string;
    readonly metadata: TaskMetadata;
    todoList?: TodoItem[];
    readonly rootTask: Task | undefined;
    readonly parentTask: Task | undefined;
    readonly taskNumber: number;
    readonly workspacePath: string;
    /**
     * The mode associated with this task. Persisted across sessions
     * to maintain user context when reopening tasks from history.
     *
     * ## Lifecycle
     *
     * ### For new tasks:
     * 1. Initially `undefined` during construction
     * 2. Asynchronously initialized from provider state via `initializeTaskMode()`
     * 3. Falls back to `defaultModeSlug` if provider state is unavailable
     *
     * ### For history items:
     * 1. Immediately set from `historyItem.mode` during construction
     * 2. Falls back to `defaultModeSlug` if mode is not stored in history
     *
     * ## Important
     * This property should NOT be accessed directly until `taskModeReady` promise resolves.
     * Use `getTaskMode()` for async access or `taskMode` getter for sync access after initialization.
     *
     * @private
     * @see {@link getTaskMode} - For safe async access
     * @see {@link taskMode} - For sync access after initialization
     * @see {@link waitForModeInitialization} - To ensure initialization is complete
     */
    private _taskMode;
    /**
     * The tool protocol locked to this task. Once set, the task will continue
     * using this protocol even if user settings change.
     *
     * ## Why This Matters
     * When NTC (Native Tool Calling) is enabled, XML parsing does NOT occur.
     * If a task previously used XML tools, resuming it with NTC enabled would
     * break because the tool calls in the history would not be parseable.
     *
     * ## Lifecycle
     *
     * ### For new tasks:
     * 1. Set immediately in constructor via `resolveToolProtocol()`
     * 2. Locked for the lifetime of the task
     *
     * ### For history items:
     * 1. If `historyItem.toolProtocol` exists, use it
     * 2. Otherwise, detect from API history via `detectToolProtocolFromHistory()`
     * 3. If no tools in history, use `resolveToolProtocol()` from current settings
     *
     * @private
     */
    private _taskToolProtocol;
    /**
     * Promise that resolves when the task mode has been initialized.
     * This ensures async mode initialization completes before the task is used.
     *
     * ## Purpose
     * - Prevents race conditions when accessing task mode
     * - Ensures provider state is properly loaded before mode-dependent operations
     * - Provides a synchronization point for async initialization
     *
     * ## Resolution timing
     * - For history items: Resolves immediately (sync initialization)
     * - For new tasks: Resolves after provider state is fetched (async initialization)
     *
     * @private
     * @see {@link waitForModeInitialization} - Public method to await this promise
     */
    private taskModeReady;
    providerRef: WeakRef<ClineProvider>;
    private readonly globalStoragePath;
    abort: boolean;
    currentRequestAbortController?: AbortController;
    skipPrevResponseIdOnce: boolean;
    idleAsk?: ClineMessage;
    resumableAsk?: ClineMessage;
    interactiveAsk?: ClineMessage;
    didFinishAbortingStream: boolean;
    abandoned: boolean;
    abortReason?: ClineApiReqCancelReason;
    isInitialized: boolean;
    isPaused: boolean;
    apiConfiguration: ProviderSettings;
    api: ApiHandler;
    private static lastGlobalApiRequestTime?;
    private autoApprovalHandler;
    /**
     * Reset the global API request timestamp. This should only be used for testing.
     * @internal
     */
    static resetGlobalApiRequestTime(): void;
    toolRepetitionDetector: ToolRepetitionDetector;
    rooIgnoreController?: RooIgnoreController;
    rooProtectedController?: RooProtectedController;
    fileContextTracker: FileContextTracker;
    urlContentFetcher: UrlContentFetcher;
    terminalProcess?: RooTerminalProcess;
    browserSession: BrowserSession;
    diffViewProvider: DiffViewProvider;
    diffStrategy?: DiffStrategy;
    diffEnabled: boolean;
    fuzzyMatchThreshold: number;
    didEditFile: boolean;
    apiConversationHistory: ApiMessage[];
    clineMessages: ClineMessage[];
    private askResponse?;
    private askResponseText?;
    private askResponseImages?;
    lastMessageTs?: number;
    private autoApprovalTimeoutRef?;
    consecutiveMistakeCount: number;
    consecutiveMistakeLimit: number;
    consecutiveMistakeCountForApplyDiff: Map<string, number>;
    consecutiveNoToolUseCount: number;
    consecutiveNoAssistantMessagesCount: number;
    toolUsage: ToolUsage;
    enableCheckpoints: boolean;
    checkpointTimeout: number;
    checkpointService?: RepoPerTaskCheckpointService;
    checkpointServiceInitializing: boolean;
    enableBridge: boolean;
    readonly messageQueueService: MessageQueueService;
    private messageQueueStateChangedHandler;
    isWaitingForFirstChunk: boolean;
    isStreaming: boolean;
    currentStreamingContentIndex: number;
    currentStreamingDidCheckpoint: boolean;
    assistantMessageContent: AssistantMessageContent[];
    presentAssistantMessageLocked: boolean;
    presentAssistantMessageHasPendingUpdates: boolean;
    userMessageContent: (Anthropic.TextBlockParam | Anthropic.ImageBlockParam | Anthropic.ToolResultBlockParam)[];
    userMessageContentReady: boolean;
    didRejectTool: boolean;
    didAlreadyUseTool: boolean;
    didToolFailInCurrentTurn: boolean;
    didCompleteReadingStream: boolean;
    assistantMessageParser?: AssistantMessageParser;
    private providerProfileChangeListener?;
    private streamingToolCallIndices;
    cachedStreamingModel?: {
        id: string;
        info: ModelInfo;
    };
    private tokenUsageSnapshot?;
    private tokenUsageSnapshotAt?;
    private toolUsageSnapshot?;
    private readonly TOKEN_USAGE_EMIT_INTERVAL_MS;
    private debouncedEmitTokenUsage;
    private cloudSyncedMessageTimestamps;
    private readonly initialStatus?;
    private _messageManager?;
    constructor({ provider, apiConfiguration, enableDiff, enableCheckpoints, checkpointTimeout, enableBridge, fuzzyMatchThreshold, consecutiveMistakeLimit, task, images, historyItem, experiments: experimentsConfig, startTask, rootTask, parentTask, taskNumber, onCreated, initialTodos, workspacePath, initialStatus, }: TaskOptions);
    /**
     * Initialize the task mode from the provider state.
     * This method handles async initialization with proper error handling.
     *
     * ## Flow
     * 1. Attempts to fetch the current mode from provider state
     * 2. Sets `_taskMode` to the fetched mode or `defaultModeSlug` if unavailable
     * 3. Handles errors gracefully by falling back to default mode
     * 4. Logs any initialization errors for debugging
     *
     * ## Error handling
     * - Network failures when fetching provider state
     * - Provider not yet initialized
     * - Invalid state structure
     *
     * All errors result in fallback to `defaultModeSlug` to ensure task can proceed.
     *
     * @private
     * @param provider - The ClineProvider instance to fetch state from
     * @returns Promise that resolves when initialization is complete
     */
    private initializeTaskMode;
    /**
     * Sets up a listener for provider profile changes to automatically update the parser state.
     * This ensures the XML/native protocol parser stays synchronized with the current model.
     *
     * @private
     * @param provider - The ClineProvider instance to listen to
     */
    private setupProviderProfileChangeListener;
    /**
     * Wait for the task mode to be initialized before proceeding.
     * This method ensures that any operations depending on the task mode
     * will have access to the correct mode value.
     *
     * ## When to use
     * - Before accessing mode-specific configurations
     * - When switching between tasks with different modes
     * - Before operations that depend on mode-based permissions
     *
     * ## Example usage
     * ```typescript
     * // Wait for mode initialization before mode-dependent operations
     * await task.waitForModeInitialization();
     * const mode = task.taskMode; // Now safe to access synchronously
     *
     * // Or use with getTaskMode() for a one-liner
     * const mode = await task.getTaskMode(); // Internally waits for initialization
     * ```
     *
     * @returns Promise that resolves when the task mode is initialized
     * @public
     */
    waitForModeInitialization(): Promise<void>;
    /**
     * Get the task mode asynchronously, ensuring it's properly initialized.
     * This is the recommended way to access the task mode as it guarantees
     * the mode is available before returning.
     *
     * ## Async behavior
     * - Internally waits for `taskModeReady` promise to resolve
     * - Returns the initialized mode or `defaultModeSlug` as fallback
     * - Safe to call multiple times - subsequent calls return immediately if already initialized
     *
     * ## Example usage
     * ```typescript
     * // Safe async access
     * const mode = await task.getTaskMode();
     * console.log(`Task is running in ${mode} mode`);
     *
     * // Use in conditional logic
     * if (await task.getTaskMode() === 'architect') {
     *   // Perform architect-specific operations
     * }
     * ```
     *
     * @returns Promise resolving to the task mode string
     * @public
     */
    getTaskMode(): Promise<string>;
    /**
     * Get the task mode synchronously. This should only be used when you're certain
     * that the mode has already been initialized (e.g., after waitForModeInitialization).
     *
     * ## When to use
     * - In synchronous contexts where async/await is not available
     * - After explicitly waiting for initialization via `waitForModeInitialization()`
     * - In event handlers or callbacks where mode is guaranteed to be initialized
     *
     * ## Example usage
     * ```typescript
     * // After ensuring initialization
     * await task.waitForModeInitialization();
     * const mode = task.taskMode; // Safe synchronous access
     *
     * // In an event handler after task is started
     * task.on('taskStarted', () => {
     *   console.log(`Task started in ${task.taskMode} mode`); // Safe here
     * });
     * ```
     *
     * @throws {Error} If the mode hasn't been initialized yet
     * @returns The task mode string
     * @public
     */
    get taskMode(): string;
    static create(options: TaskOptions): [Task, Promise<void>];
    private getSavedApiConversationHistory;
    private addToApiConversationHistory;
    overwriteApiConversationHistory(newHistory: ApiMessage[]): Promise<void>;
    /**
     * Flush any pending tool results to the API conversation history.
     *
     * This is critical for native tool protocol when the task is about to be
     * delegated (e.g., via new_task). Before delegation, if other tools were
     * called in the same turn before new_task, their tool_result blocks are
     * accumulated in `userMessageContent` but haven't been saved to the API
     * history yet. If we don't flush them before the parent is disposed,
     * the API conversation will be incomplete and cause 400 errors when
     * the parent resumes (missing tool_result for tool_use blocks).
     *
     * NOTE: The assistant message is typically already in history by the time
     * tools execute (added in recursivelyMakeClineRequests after streaming completes).
     * So we usually only need to flush the pending user message with tool_results.
     */
    flushPendingToolResultsToHistory(): Promise<void>;
    private saveApiConversationHistory;
    private getSavedClineMessages;
    private addToClineMessages;
    overwriteClineMessages(newMessages: ClineMessage[]): Promise<void>;
    private updateClineMessage;
    private saveClineMessages;
    private findMessageByTimestamp;
    ask(type: ClineAsk, text?: string, partial?: boolean, progressStatus?: ToolProgressStatus, isProtected?: boolean): Promise<{
        response: ClineAskResponse;
        text?: string;
        images?: string[];
    }>;
    handleWebviewAskResponse(askResponse: ClineAskResponse, text?: string, images?: string[]): void;
    /**
     * Cancel any pending auto-approval timeout.
     * Called when user interacts (types, clicks buttons, etc.) to prevent the timeout from firing.
     */
    cancelAutoApprovalTimeout(): void;
    approveAsk({ text, images }?: {
        text?: string;
        images?: string[];
    }): void;
    denyAsk({ text, images }?: {
        text?: string;
        images?: string[];
    }): void;
    /**
     * Updates the API configuration but preserves the locked tool protocol.
     * The task's tool protocol is locked at creation time and should NOT change
     * even when switching between models/profiles with different settings.
     *
     * @param newApiConfiguration - The new API configuration to use
     */
    updateApiConfiguration(newApiConfiguration: ProviderSettings): void;
    submitUserMessage(text: string, images?: string[], mode?: string, providerProfile?: string): Promise<void>;
    handleTerminalOperation(terminalOperation: "continue" | "abort"): Promise<void>;
    condenseContext(): Promise<void>;
    say(type: ClineSay, text?: string, images?: string[], partial?: boolean, checkpoint?: Record<string, unknown>, progressStatus?: ToolProgressStatus, options?: {
        isNonInteractive?: boolean;
    }, contextCondense?: ContextCondense, contextTruncation?: ContextTruncation): Promise<undefined>;
    sayAndCreateMissingParamError(toolName: ToolName, paramName: string, relPath?: string): Promise<string>;
    private startTask;
    private resumeTaskFromHistory;
    /**
     * Cancels the current HTTP request if one is in progress.
     * This immediately aborts the underlying stream rather than waiting for the next chunk.
     */
    cancelCurrentRequest(): void;
    /**
     * Force emit a final token usage update, ignoring throttle.
     * Called before task completion or abort to ensure final stats are captured.
     * Triggers the debounce with current values and immediately flushes to ensure emit.
     */
    emitFinalTokenUsageUpdate(): void;
    abortTask(isAbandoned?: boolean): Promise<void>;
    dispose(): void;
    startSubtask(message: string, initialTodos: TodoItem[], mode: string): Promise<any>;
    /**
     * Resume parent task after delegation completion without showing resume ask.
     * Used in metadata-driven subtask flow.
     *
     * This method:
     * - Clears any pending ask states
     * - Resets abort and streaming flags
     * - Ensures next API call includes full context
     * - Immediately continues task loop without user interaction
     */
    resumeAfterDelegation(): Promise<void>;
    private initiateTaskLoop;
    recursivelyMakeClineRequests(userContent: Anthropic.Messages.ContentBlockParam[], includeFileDetails?: boolean): Promise<boolean>;
    private getSystemPrompt;
    private getCurrentProfileId;
    private handleContextWindowExceededError;
    attemptApiRequest(retryAttempt?: number): ApiStream;
    private backoffAndAnnounce;
    checkpointSave(force?: boolean, suppressMessage?: boolean): Promise<void | import("../../services/checkpoints/types").CheckpointResult>;
    private buildCleanConversationHistory;
    checkpointRestore(options: CheckpointRestoreOptions): Promise<void>;
    checkpointDiff(options: CheckpointDiffOptions): Promise<void>;
    combineMessages(messages: ClineMessage[]): {
        type: "ask" | "say";
        ts: number;
        text?: string | undefined;
        reasoning?: string | undefined;
        ask?: "followup" | "command" | "command_output" | "completion_result" | "tool" | "api_req_failed" | "resume_task" | "resume_completed_task" | "mistake_limit_reached" | "browser_action_launch" | "use_mcp_server" | "auto_approval_max_req_reached" | undefined;
        say?: "command_output" | "completion_result" | "error" | "api_req_started" | "api_req_finished" | "api_req_retried" | "api_req_retry_delayed" | "api_req_deleted" | "text" | "image" | "reasoning" | "user_feedback" | "user_feedback_diff" | "shell_integration_warning" | "browser_action" | "browser_action_result" | "browser_session_status" | "mcp_server_request_started" | "mcp_server_response" | "subtask_result" | "checkpoint_saved" | "rooignore_error" | "diff_error" | "condense_context" | "condense_context_error" | "sliding_window_truncation" | "codebase_search_result" | "user_edit_todos" | undefined;
        images?: string[] | undefined;
        partial?: boolean | undefined;
        conversationHistoryIndex?: number | undefined;
        checkpoint?: Record<string, unknown> | undefined;
        progressStatus?: {
            text?: string | undefined;
            icon?: string | undefined;
        } | undefined;
        contextCondense?: {
            cost: number;
            prevContextTokens: number;
            newContextTokens: number;
            summary: string;
            condenseId?: string | undefined;
        } | undefined;
        contextTruncation?: {
            prevContextTokens: number;
            newContextTokens: number;
            truncationId: string;
            messagesRemoved: number;
        } | undefined;
        isProtected?: boolean | undefined;
        apiProtocol?: "openai" | "anthropic" | undefined;
        isAnswered?: boolean | undefined;
    }[];
    getTokenUsage(): TokenUsage;
    recordToolUsage(toolName: ToolName): void;
    recordToolError(toolName: ToolName, error?: string): void;
    get taskStatus(): TaskStatus;
    get taskAsk(): ClineMessage | undefined;
    get queuedMessages(): QueuedMessage[];
    get tokenUsage(): TokenUsage | undefined;
    get cwd(): string;
    /**
     * Get the tool protocol locked to this task.
     * Returns undefined only if the task hasn't been fully initialized yet.
     *
     * @see {@link _taskToolProtocol} for lifecycle details
     */
    get taskToolProtocol(): ToolProtocol | undefined;
    /**
     * Provides convenient access to high-level message operations.
     * Uses lazy initialization - the MessageManager is only created when first accessed.
     * Subsequent accesses return the same cached instance.
     *
     * ## Important: Single Coordination Point
     *
     * **All MessageManager operations must go through this getter** rather than
     * instantiating `new MessageManager(task)` directly. This ensures:
     * - A single shared instance for consistent behavior
     * - Centralized coordination of all rewind/message operations
     * - Ability to add internal state or instrumentation in the future
     *
     * @example
     * ```typescript
     * // Correct: Use the getter
     * await task.messageManager.rewindToTimestamp(ts)
     *
     * // Incorrect: Do NOT create new instances directly
     * // const manager = new MessageManager(task) // Don't do this!
     * ```
     */
    get messageManager(): MessageManager;
    /**
     * Broadcast browser session updates to the browser panel (if open)
     */
    private broadcastBrowserSessionUpdate;
    /**
     * Process any queued messages by dequeuing and submitting them.
     * This ensures that queued user messages are sent when appropriate,
     * preventing them from getting stuck in the queue.
     *
     * @param context - Context string for logging (e.g., the calling tool name)
     */
    processQueuedMessages(): void;
}

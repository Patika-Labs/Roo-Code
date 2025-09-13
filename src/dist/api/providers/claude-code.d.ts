import type { Anthropic } from "@anthropic-ai/sdk";
import { type ModelInfo } from "@roo-code/types";
import { type ApiHandler, ApiHandlerCreateMessageMetadata, type SingleCompletionHandler } from "..";
import { type ApiStream } from "../transform/stream";
import { ApiHandlerOptions } from "../../shared/api";
export declare class ClaudeCodeHandler implements ApiHandler, SingleCompletionHandler {
    private options;
    /**
     * Store the last thinking block signature for interleaved thinking with tool use.
     * This is captured from thinking_complete events during streaming and
     * must be passed back to the API when providing tool results.
     * Similar to Gemini's thoughtSignature pattern.
     */
    private lastThinkingSignature?;
    constructor(options: ApiHandlerOptions);
    /**
     * Get the thinking signature from the last response.
     * Used by Task.addToApiConversationHistory to persist the signature
     * so it can be passed back to the API for tool use continuations.
     * This follows the same pattern as Gemini's getThoughtSignature().
     */
    getThoughtSignature(): string | undefined;
    /**
     * Gets the reasoning effort level for the current request.
     * Returns the effective reasoning level (low/medium/high) or null if disabled.
     */
    private getReasoningEffort;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    countTokens(content: Anthropic.Messages.ContentBlockParam[]): Promise<number>;
    /**
     * Completes a prompt using the Claude Code API.
     * This is used for context condensing and prompt enhancement.
     * The Claude Code branding is automatically prepended by createStreamingMessage.
     */
    completePrompt(prompt: string): Promise<string>;
}

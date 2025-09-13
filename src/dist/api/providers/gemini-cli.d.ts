import type { Anthropic } from "@anthropic-ai/sdk";
import type { ApiHandlerOptions } from "../../shared/api";
import type { ApiStream } from "../transform/stream";
import type { SingleCompletionHandler, ApiHandlerCreateMessageMetadata } from "../index";
import { BaseProvider } from "./base-provider";
export declare class GeminiCliHandler extends BaseProvider implements SingleCompletionHandler {
    protected options: ApiHandlerOptions;
    private authClient;
    private projectId;
    private credentials;
    constructor(options: ApiHandlerOptions);
    private loadOAuthCredentials;
    private ensureAuthenticated;
    /**
     * Call a Code Assist API endpoint
     */
    private callEndpoint;
    /**
     * Discover or retrieve the project ID
     */
    private discoverProjectId;
    /**
     * Parse Server-Sent Events from a stream
     */
    private parseSSEStream;
    createMessage(systemInstruction: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    getModel(): {
        format: "gemini";
        reasoning: import("../transform/reasoning").GeminiReasoningParams | undefined;
        maxTokens: number | undefined;
        temperature: number | undefined;
        reasoningEffort: import("@roo-code/types").ReasoningEffortWithMinimal | undefined;
        reasoningBudget: number | undefined;
        verbosity: import("@roo-code/types").VerbosityLevel | undefined;
        id: "gemini-2.5-flash" | "gemini-2.5-pro" | "gemini-2.0-flash-001" | "gemini-2.0-flash-thinking-exp-01-21" | "gemini-2.0-flash-thinking-exp-1219" | "gemini-2.0-flash-exp" | "gemini-1.5-flash-002" | "gemini-1.5-flash-exp-0827" | "gemini-1.5-flash-8b-exp-0827" | "gemini-1.5-pro-002" | "gemini-1.5-pro-exp-0827" | "gemini-exp-1206";
        info: {
            contextWindow: number;
            supportsPromptCache: boolean;
            maxTokens?: number | null | undefined;
            maxThinkingTokens?: number | null | undefined;
            supportsImages?: boolean | undefined;
            supportsComputerUse?: boolean | undefined;
            supportsVerbosity?: boolean | undefined;
            supportsReasoningBudget?: boolean | undefined;
            supportsTemperature?: boolean | undefined;
            requiredReasoningBudget?: boolean | undefined;
            supportsReasoningEffort?: boolean | undefined;
            supportedParameters?: ("reasoning" | "max_tokens" | "temperature" | "include_reasoning")[] | undefined;
            inputPrice?: number | undefined;
            outputPrice?: number | undefined;
            cacheWritesPrice?: number | undefined;
            cacheReadsPrice?: number | undefined;
            description?: string | undefined;
            reasoningEffort?: "low" | "medium" | "high" | undefined;
            minTokensPerCachePoint?: number | undefined;
            maxCachePoints?: number | undefined;
            cachableFields?: string[] | undefined;
            tiers?: {
                contextWindow: number;
                name?: "default" | "flex" | "priority" | undefined;
                inputPrice?: number | undefined;
                outputPrice?: number | undefined;
                cacheWritesPrice?: number | undefined;
                cacheReadsPrice?: number | undefined;
            }[] | undefined;
        };
    };
    completePrompt(prompt: string): Promise<string>;
    countTokens(content: Array<Anthropic.Messages.ContentBlockParam>): Promise<number>;
}

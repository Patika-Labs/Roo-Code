import { Anthropic } from "@anthropic-ai/sdk";
import { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import { BaseProvider } from "./base-provider";
import type { SingleCompletionHandler, ApiHandlerCreateMessageMetadata } from "../index";
export declare class AnthropicVertexHandler extends BaseProvider implements SingleCompletionHandler {
    protected options: ApiHandlerOptions;
    private client;
    constructor(options: ApiHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    getModel(): {
        format: "anthropic";
        reasoning: import("../transform/reasoning").AnthropicReasoningParams | undefined;
        maxTokens: number | undefined;
        temperature: number | undefined;
        reasoningEffort: import("@roo-code/types").ReasoningEffortWithMinimal | undefined;
        reasoningBudget: number | undefined;
        verbosity: import("@roo-code/types").VerbosityLevel | undefined;
        id: string;
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
}

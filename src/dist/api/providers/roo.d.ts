import { Anthropic } from "@anthropic-ai/sdk";
import { type RooModelId } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import type { ApiHandlerCreateMessageMetadata } from "../index";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class RooHandler extends BaseOpenAiCompatibleProvider<RooModelId> {
    private authStateListener?;
    constructor(options: ApiHandlerOptions);
    dispose(): void;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    getModel(): {
        id: RooModelId;
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
            deprecated?: boolean | undefined;
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
}

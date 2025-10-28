import { type ChutesModelId } from "@roo-code/types";
import { Anthropic } from "@anthropic-ai/sdk";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class ChutesHandler extends BaseOpenAiCompatibleProvider<ChutesModelId> {
    constructor(options: ApiHandlerOptions);
    private getCompletionParams;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream;
    getModel(): {
        info: {
            temperature: number;
            contextWindow: number;
            supportsPromptCache: boolean;
            maxTokens?: number | null | undefined;
            maxThinkingTokens?: number | null | undefined;
            supportsImages?: boolean | undefined;
            supportsVerbosity?: boolean | undefined;
            supportsReasoningBudget?: boolean | undefined;
            supportsReasoningBinary?: boolean | undefined;
            supportsTemperature?: boolean | undefined;
            requiredReasoningBudget?: boolean | undefined;
            supportsReasoningEffort?: boolean | undefined;
            requiredReasoningEffort?: boolean | undefined;
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
            isFree?: boolean | undefined;
            tiers?: {
                contextWindow: number;
                name?: "default" | "flex" | "priority" | undefined;
                inputPrice?: number | undefined;
                outputPrice?: number | undefined;
                cacheWritesPrice?: number | undefined;
                cacheReadsPrice?: number | undefined;
            }[] | undefined;
        };
        id: ChutesModelId;
    };
}

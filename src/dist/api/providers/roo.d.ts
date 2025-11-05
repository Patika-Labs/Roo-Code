import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import type { ApiHandlerCreateMessageMetadata } from "../index";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class RooHandler extends BaseOpenAiCompatibleProvider<string> {
    private fetcherBaseURL;
    constructor(options: ApiHandlerOptions);
    protected createStream(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata, requestOptions?: OpenAI.RequestOptions): import("openai").APIPromise<import("openai/core/streaming.mjs").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    completePrompt(prompt: string): Promise<string>;
    private loadDynamicModels;
    getModel(): {
        id: string;
        info: {
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
            preserveReasoning?: boolean | undefined;
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
    };
}

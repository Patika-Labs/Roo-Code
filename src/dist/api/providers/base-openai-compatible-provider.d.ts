import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
import type { ModelInfo } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import type { SingleCompletionHandler, ApiHandlerCreateMessageMetadata } from "../index";
import { BaseProvider } from "./base-provider";
type BaseOpenAiCompatibleProviderOptions<ModelName extends string> = ApiHandlerOptions & {
    providerName: string;
    baseURL: string;
    defaultProviderModelId: ModelName;
    providerModels: Record<ModelName, ModelInfo>;
    defaultTemperature?: number;
};
export declare abstract class BaseOpenAiCompatibleProvider<ModelName extends string> extends BaseProvider implements SingleCompletionHandler {
    protected readonly providerName: string;
    protected readonly baseURL: string;
    protected readonly defaultTemperature: number;
    protected readonly defaultProviderModelId: ModelName;
    protected readonly providerModels: Record<ModelName, ModelInfo>;
    protected readonly options: ApiHandlerOptions;
    protected client: OpenAI;
    constructor({ providerName, baseURL, defaultProviderModelId, providerModels, defaultTemperature, ...options }: BaseOpenAiCompatibleProviderOptions<ModelName>);
    protected createStream(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata, requestOptions?: OpenAI.RequestOptions): import("openai").APIPromise<import("openai/core/streaming.mjs").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    completePrompt(prompt: string): Promise<string>;
    getModel(): {
        id: ModelName;
        info: Record<ModelName, {
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
        }>[ModelName];
    };
}
export {};

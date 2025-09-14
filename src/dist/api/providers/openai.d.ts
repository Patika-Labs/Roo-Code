import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { type ModelInfo } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream, ApiStreamUsageChunk } from "../transform/stream";
import { BaseProvider } from "./base-provider";
import type { SingleCompletionHandler, ApiHandlerCreateMessageMetadata } from "../index";
export declare class OpenAiHandler extends BaseProvider implements SingleCompletionHandler {
    protected options: ApiHandlerOptions;
    private client;
    private readonly providerName;
    constructor(options: ApiHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    protected processUsageMetrics(usage: any, _modelInfo?: ModelInfo): ApiStreamUsageChunk;
    getModel(): {
        format: "openai";
        reasoning: import("../transform/reasoning").OpenAiReasoningParams | undefined;
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
    private handleO3FamilyMessage;
    private handleStreamResponse;
    private _getUrlHost;
    private _isGrokXAI;
    private _isAzureAiInference;
    /**
     * Adds max_completion_tokens to the request body if needed based on provider configuration
     * Note: max_tokens is deprecated in favor of max_completion_tokens as per OpenAI documentation
     * O3 family models handle max_tokens separately in handleO3FamilyMessage
     */
    protected addMaxTokensIfNeeded(requestOptions: OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming | OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming, modelInfo: ModelInfo): void;
}
export declare function getOpenAiModels(baseUrl?: string, apiKey?: string, openAiHeaders?: Record<string, string>): Promise<string[]>;

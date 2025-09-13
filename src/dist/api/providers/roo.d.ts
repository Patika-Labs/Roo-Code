import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { type ImageGenerationApiMethod } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import type { ApiHandlerCreateMessageMetadata } from "../index";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
import { ImageGenerationResult } from "./utils/image-generation";
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
            promptCacheRetention?: "in_memory" | "24h" | undefined;
            supportsVerbosity?: boolean | undefined;
            supportsReasoningBudget?: boolean | undefined;
            supportsReasoningBinary?: boolean | undefined;
            supportsTemperature?: boolean | undefined;
            defaultTemperature?: number | undefined;
            requiredReasoningBudget?: boolean | undefined;
            supportsReasoningEffort?: boolean | ("low" | "medium" | "high" | "minimal" | "none" | "disable")[] | undefined;
            requiredReasoningEffort?: boolean | undefined;
            preserveReasoning?: boolean | undefined;
            supportedParameters?: ("reasoning" | "max_tokens" | "temperature" | "include_reasoning")[] | undefined;
            inputPrice?: number | undefined;
            outputPrice?: number | undefined;
            cacheWritesPrice?: number | undefined;
            cacheReadsPrice?: number | undefined;
            description?: string | undefined;
            reasoningEffort?: "low" | "medium" | "high" | "minimal" | "none" | undefined;
            minTokensPerCachePoint?: number | undefined;
            maxCachePoints?: number | undefined;
            cachableFields?: string[] | undefined;
            deprecated?: boolean | undefined;
            isStealthModel?: boolean | undefined;
            isFree?: boolean | undefined;
            supportsNativeTools?: boolean | undefined;
            defaultToolProtocol?: "xml" | "native" | undefined;
            excludedTools?: string[] | undefined;
            includedTools?: string[] | undefined;
            tiers?: {
                contextWindow: number;
                name?: "default" | "flex" | "priority" | undefined;
                inputPrice?: number | undefined;
                outputPrice?: number | undefined;
                cacheWritesPrice?: number | undefined;
                cacheReadsPrice?: number | undefined;
            }[] | undefined;
        };
    } | {
        id: string;
        info: {
            maxTokens: number;
            contextWindow: number;
            supportsImages: boolean;
            supportsReasoningEffort: boolean;
            supportsPromptCache: boolean;
            supportsNativeTools: boolean;
            inputPrice: number;
            outputPrice: number;
            isFree: boolean;
        };
    };
    /**
     * Generate an image using Roo Code Cloud's image generation API
     * @param prompt The text prompt for image generation
     * @param model The model to use for generation
     * @param inputImage Optional base64 encoded input image data URL
     * @param apiMethod The API method to use (chat_completions or images_api)
     * @returns The generated image data and format, or an error
     */
    generateImage(prompt: string, model: string, inputImage?: string, apiMethod?: ImageGenerationApiMethod): Promise<ImageGenerationResult>;
}

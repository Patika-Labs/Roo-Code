import { Anthropic } from "@anthropic-ai/sdk";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import { BaseProvider } from "./base-provider";
import type { SingleCompletionHandler, ApiHandlerCreateMessageMetadata } from "../index";
export declare class XAIHandler extends BaseProvider implements SingleCompletionHandler {
    protected options: ApiHandlerOptions;
    private client;
    private readonly providerName;
    constructor(options: ApiHandlerOptions);
    getModel(): {
        format: "openai";
        reasoning: import("../transform/reasoning").OpenAiReasoningParams | undefined;
        maxTokens: number | undefined;
        temperature: number | undefined;
        reasoningEffort: import("@roo-code/types").ReasoningEffortWithMinimal | undefined;
        reasoningBudget: number | undefined;
        verbosity: import("@roo-code/types").VerbosityLevel | undefined;
        id: "grok-code-fast-1" | "grok-4" | "grok-3" | "grok-3-fast" | "grok-3-mini" | "grok-3-mini-fast" | "grok-2-1212" | "grok-2-vision-1212";
        info: {
            readonly maxTokens: 16384;
            readonly contextWindow: 262144;
            readonly supportsImages: false;
            readonly supportsPromptCache: true;
            readonly inputPrice: 0.2;
            readonly outputPrice: 1.5;
            readonly cacheWritesPrice: 0.02;
            readonly cacheReadsPrice: 0.02;
            readonly description: "xAI's Grok Code Fast model with 256K context window";
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 256000;
            readonly supportsImages: true;
            readonly supportsPromptCache: true;
            readonly inputPrice: 3;
            readonly outputPrice: 15;
            readonly cacheWritesPrice: 0.75;
            readonly cacheReadsPrice: 0.75;
            readonly description: "xAI's Grok-4 model with 256K context window";
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 131072;
            readonly supportsImages: false;
            readonly supportsPromptCache: true;
            readonly inputPrice: 3;
            readonly outputPrice: 15;
            readonly cacheWritesPrice: 0.75;
            readonly cacheReadsPrice: 0.75;
            readonly description: "xAI's Grok-3 model with 128K context window";
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 131072;
            readonly supportsImages: false;
            readonly supportsPromptCache: true;
            readonly inputPrice: 5;
            readonly outputPrice: 25;
            readonly cacheWritesPrice: 1.25;
            readonly cacheReadsPrice: 1.25;
            readonly description: "xAI's Grok-3 fast model with 128K context window";
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 131072;
            readonly supportsImages: false;
            readonly supportsPromptCache: true;
            readonly inputPrice: 0.3;
            readonly outputPrice: 0.5;
            readonly cacheWritesPrice: 0.07;
            readonly cacheReadsPrice: 0.07;
            readonly description: "xAI's Grok-3 mini model with 128K context window";
            readonly supportsReasoningEffort: true;
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 131072;
            readonly supportsImages: false;
            readonly supportsPromptCache: true;
            readonly inputPrice: 0.6;
            readonly outputPrice: 4;
            readonly cacheWritesPrice: 0.15;
            readonly cacheReadsPrice: 0.15;
            readonly description: "xAI's Grok-3 mini fast model with 128K context window";
            readonly supportsReasoningEffort: true;
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 131072;
            readonly supportsImages: false;
            readonly supportsPromptCache: false;
            readonly inputPrice: 2;
            readonly outputPrice: 10;
            readonly description: "xAI's Grok-2 model (version 1212) with 128K context window";
        } | {
            readonly maxTokens: 8192;
            readonly contextWindow: 32768;
            readonly supportsImages: true;
            readonly supportsPromptCache: false;
            readonly inputPrice: 2;
            readonly outputPrice: 10;
            readonly description: "xAI's Grok-2 Vision model (version 1212) with image support and 32K context window";
        };
    };
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    completePrompt(prompt: string): Promise<string>;
}

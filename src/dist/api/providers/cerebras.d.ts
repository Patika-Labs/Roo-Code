import { Anthropic } from "@anthropic-ai/sdk";
import { type CerebrasModelId, cerebrasModels } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { ApiStream } from "../transform/stream";
import type { ApiHandlerCreateMessageMetadata, SingleCompletionHandler } from "../index";
import { BaseProvider } from "./base-provider";
export declare class CerebrasHandler extends BaseProvider implements SingleCompletionHandler {
    private apiKey;
    private providerModels;
    private defaultProviderModelId;
    private options;
    private lastUsage;
    constructor(options: ApiHandlerOptions);
    getModel(): {
        id: CerebrasModelId;
        info: (typeof cerebrasModels)[CerebrasModelId];
    };
    /**
     * Override convertToolSchemaForOpenAI to remove unsupported schema fields for Cerebras.
     * Cerebras doesn't support minItems/maxItems in array schemas with strict mode.
     */
    protected convertToolSchemaForOpenAI(schema: any): any;
    /**
     * Recursively strips unsupported schema fields for Cerebras.
     * Cerebras strict mode doesn't support minItems, maxItems on arrays.
     */
    private stripUnsupportedSchemaFields;
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    completePrompt(prompt: string): Promise<string>;
    getApiCost(metadata: ApiHandlerCreateMessageMetadata): number;
}

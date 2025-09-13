import type { Anthropic } from "@anthropic-ai/sdk";
import { type ModelInfo } from "@roo-code/types";
import { type ApiHandler, ApiHandlerCreateMessageMetadata } from "..";
import { type ApiStream } from "../transform/stream";
import { ApiHandlerOptions } from "../../shared/api";
export declare class ClaudeCodeHandler implements ApiHandler {
    private options;
    constructor(options: ApiHandlerOptions);
    createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], _metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    countTokens(content: Anthropic.Messages.ContentBlockParam[]): Promise<number>;
    private attemptParse;
}

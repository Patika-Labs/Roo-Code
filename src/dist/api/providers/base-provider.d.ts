import { Anthropic } from "@anthropic-ai/sdk";
import type { ModelInfo } from "@roo-code/types";
import type { ApiHandler, ApiHandlerCreateMessageMetadata } from "../index";
import { ApiStream } from "../transform/stream";
/**
 * Base class for API providers that implements common functionality.
 */
export declare abstract class BaseProvider implements ApiHandler {
    abstract createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[], metadata?: ApiHandlerCreateMessageMetadata): ApiStream;
    abstract getModel(): {
        id: string;
        info: ModelInfo;
    };
    /**
     * Default token counting implementation using tiktoken.
     * Providers can override this to use their native token counting endpoints.
     *
     * @param content The content to count tokens for
     * @returns A promise resolving to the token count
     */
    countTokens(content: Anthropic.Messages.ContentBlockParam[]): Promise<number>;
}

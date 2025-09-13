import { Anthropic } from "@anthropic-ai/sdk";
import OpenAI from "openai";
/**
 * Options for converting Anthropic messages to OpenAI format.
 */
export interface ConvertToOpenAiMessagesOptions {
    /**
     * Optional function to normalize tool call IDs for providers with strict ID requirements.
     * When provided, this function will be applied to all tool_use IDs and tool_result tool_use_ids.
     * This allows callers to declare provider-specific ID format requirements.
     */
    normalizeToolCallId?: (id: string) => string;
}
export declare function convertToOpenAiMessages(anthropicMessages: Anthropic.Messages.MessageParam[], options?: ConvertToOpenAiMessagesOptions): OpenAI.Chat.ChatCompletionMessageParam[];

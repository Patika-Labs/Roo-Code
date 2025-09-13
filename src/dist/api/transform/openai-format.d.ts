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
    /**
     * If true, merge text content after tool_results into the last tool message
     * instead of creating a separate user message. This is critical for providers
     * with reasoning/thinking models (like DeepSeek-reasoner, GLM-4.7, etc.) where
     * a user message after tool results causes the model to drop all previous
     * reasoning_content. Default is false for backward compatibility.
     */
    mergeToolResultText?: boolean;
}
export declare function convertToOpenAiMessages(anthropicMessages: Anthropic.Messages.MessageParam[], options?: ConvertToOpenAiMessagesOptions): OpenAI.Chat.ChatCompletionMessageParam[];

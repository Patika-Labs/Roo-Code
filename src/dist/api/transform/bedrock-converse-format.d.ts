import { Anthropic } from "@anthropic-ai/sdk";
import { Message } from "@aws-sdk/client-bedrock-runtime";
/**
 * Convert Anthropic messages to Bedrock Converse format
 * @param anthropicMessages Messages in Anthropic format
 * @param options Optional configuration for conversion
 * @param options.useNativeTools When true, keeps tool_use input as JSON object instead of XML string
 */
export declare function convertToBedrockConverseMessages(anthropicMessages: Anthropic.Messages.MessageParam[], options?: {
    useNativeTools?: boolean;
}): Message[];

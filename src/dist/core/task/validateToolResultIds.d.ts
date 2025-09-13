import { Anthropic } from "@anthropic-ai/sdk";
/**
 * Custom error class for tool result ID mismatches.
 * Used for structured error tracking via PostHog.
 */
export declare class ToolResultIdMismatchError extends Error {
    readonly toolResultIds: string[];
    readonly toolUseIds: string[];
    constructor(message: string, toolResultIds: string[], toolUseIds: string[]);
}
/**
 * Validates and fixes tool_result IDs in a user message against the previous assistant message.
 *
 * This is a centralized validation that catches all tool_use/tool_result ID mismatches
 * before messages are added to the API conversation history. It handles scenarios like:
 * - Race conditions during streaming
 * - Message editing scenarios
 * - Resume/delegation scenarios
 *
 * @param userMessage - The user message being added to history
 * @param apiConversationHistory - The conversation history to find the previous assistant message from
 * @returns The validated user message with corrected tool_use_ids
 */
export declare function validateAndFixToolResultIds(userMessage: Anthropic.MessageParam, apiConversationHistory: Anthropic.MessageParam[]): Anthropic.MessageParam;

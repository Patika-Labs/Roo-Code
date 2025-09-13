import { ToolProtocol } from "@roo-code/types";
import type { ProviderSettings } from "@roo-code/types";
import type { Anthropic } from "@anthropic-ai/sdk";
/**
 * Represents an API message in the conversation history.
 * This is a minimal type definition for the detection function.
 */
type ApiMessageForDetection = Anthropic.MessageParam & {
    ts?: number;
};
/**
 * Resolve the effective tool protocol.
 *
 * **Deprecation Note (XML Protocol):**
 * XML tool protocol has been deprecated. All models now use Native tool calling.
 * User/profile preferences (`providerSettings.toolProtocol`) and model defaults
 * (`modelInfo.defaultToolProtocol`) are ignored.
 *
 * Precedence:
 * 1. Locked Protocol (task-level lock for resumed tasks - highest priority)
 * 2. Native (always, for all new tasks)
 *
 * @param _providerSettings - The provider settings (toolProtocol field is ignored)
 * @param _modelInfo - Unused, kept for API compatibility
 * @param lockedProtocol - Optional task-locked protocol that takes absolute precedence
 * @returns The resolved tool protocol (either "xml" or "native")
 */
export declare function resolveToolProtocol(_providerSettings: ProviderSettings, _modelInfo?: unknown, lockedProtocol?: ToolProtocol): ToolProtocol;
/**
 * Detect the tool protocol used in an existing conversation history.
 *
 * This function scans the API conversation history for tool_use blocks
 * and determines which protocol was used based on their structure:
 *
 * - Native protocol: tool_use blocks ALWAYS have an `id` field
 * - XML protocol: tool_use blocks NEVER have an `id` field
 *
 * This is critical for task resumption: if a task previously used tools
 * with a specific protocol, we must continue using that protocol even
 * if the user's NTC settings have changed.
 *
 * The function searches from the most recent message backwards to find
 * the last tool call, which represents the task's current protocol state.
 *
 * @param messages - The API conversation history to scan
 * @returns The detected protocol, or undefined if no tool calls were found
 */
export declare function detectToolProtocolFromHistory(messages: ApiMessageForDetection[]): ToolProtocol | undefined;
export {};

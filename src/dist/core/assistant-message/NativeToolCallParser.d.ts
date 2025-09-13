import { type ToolName } from "@roo-code/types";
import { type ToolUse } from "../../shared/tools";
import type { ApiStreamToolCallStartChunk, ApiStreamToolCallDeltaChunk, ApiStreamToolCallEndChunk } from "../../api/transform/stream";
/**
 * Parser for native tool calls (OpenAI-style function calling).
 * Converts native tool call format to ToolUse format for compatibility
 * with existing tool execution infrastructure.
 *
 * For tools with refactored parsers (e.g., read_file), this parser provides
 * typed arguments via nativeArgs. Tool-specific handlers should consume
 * nativeArgs directly rather than relying on synthesized legacy params.
 */
/**
 * Event types returned from raw chunk processing.
 */
export type ToolCallStreamEvent = ApiStreamToolCallStartChunk | ApiStreamToolCallDeltaChunk | ApiStreamToolCallEndChunk;
/**
 * Parser for native tool calls (OpenAI-style function calling).
 * Converts native tool call format to ToolUse format for compatibility
 * with existing tool execution infrastructure.
 *
 * For tools with refactored parsers (e.g., read_file), this parser provides
 * typed arguments via nativeArgs. Tool-specific handlers should consume
 * nativeArgs directly rather than relying on synthesized legacy params.
 *
 * This class also handles raw tool call chunk processing, converting
 * provider-level raw chunks into start/delta/end events.
 */
export declare class NativeToolCallParser {
    private static streamingToolCalls;
    private static rawChunkTracker;
    /**
     * Process a raw tool call chunk from the API stream.
     * Handles tracking, buffering, and emits start/delta/end events.
     *
     * This is the entry point for providers that emit tool_call_partial chunks.
     * Returns an array of events to be processed by the consumer.
     */
    static processRawChunk(chunk: {
        index: number;
        id?: string;
        name?: string;
        arguments?: string;
    }): ToolCallStreamEvent[];
    /**
     * Process stream finish reason.
     * Emits end events when finish_reason is 'tool_calls'.
     */
    static processFinishReason(finishReason: string | null | undefined): ToolCallStreamEvent[];
    /**
     * Finalize any remaining tool calls that weren't explicitly ended.
     * Should be called at the end of stream processing.
     */
    static finalizeRawChunks(): ToolCallStreamEvent[];
    /**
     * Clear all raw chunk tracking state.
     * Should be called when a new API request starts.
     */
    static clearRawChunkState(): void;
    /**
     * Start streaming a new tool call.
     * Initializes tracking for incremental argument parsing.
     */
    static startStreamingToolCall(id: string, name: ToolName): void;
    /**
     * Clear all streaming tool call state.
     * Should be called when a new API request starts to prevent memory leaks
     * from interrupted streams.
     */
    static clearAllStreamingToolCalls(): void;
    /**
     * Check if there are any active streaming tool calls.
     * Useful for debugging and testing.
     */
    static hasActiveStreamingToolCalls(): boolean;
    /**
     * Process a chunk of JSON arguments for a streaming tool call.
     * Uses partial-json-parser to extract values from incomplete JSON immediately.
     * Returns a partial ToolUse with currently parsed parameters.
     */
    static processStreamingChunk(id: string, chunk: string): ToolUse | null;
    /**
     * Finalize a streaming tool call.
     * Parses the complete JSON and returns the final ToolUse.
     */
    static finalizeStreamingToolCall(id: string): ToolUse | null;
    /**
     * Create a partial ToolUse from currently parsed arguments.
     * Used during streaming to show progress.
     */
    private static createPartialToolUse;
    /**
     * Convert a native tool call chunk to a ToolUse object.
     *
     * @param toolCall - The native tool call from the API stream
     * @returns A properly typed ToolUse object
     */
    static parseToolCall<TName extends ToolName>(toolCall: {
        id: string;
        name: TName;
        arguments: string;
    }): ToolUse<TName> | null;
    /**
     * Parse dynamic MCP tools (named mcp_serverName_toolName).
     * These are generated dynamically by getMcpServerTools() and need to be
     * converted back to use_mcp_tool format.
     */
    private static parseDynamicMcpTool;
}

import type OpenAI from "openai";
export { getMcpServerTools } from "./mcp_server";
export { convertOpenAIToolToAnthropic, convertOpenAIToolsToAnthropic } from "./converters";
/**
 * Get native tools array, optionally customizing based on settings.
 *
 * @param partialReadsEnabled - Whether to include line_ranges support in read_file tool (default: true)
 * @returns Array of native tool definitions
 */
export declare function getNativeTools(partialReadsEnabled?: boolean): OpenAI.Chat.ChatCompletionTool[];
export declare const nativeTools: OpenAI.Chat.Completions.ChatCompletionTool[];

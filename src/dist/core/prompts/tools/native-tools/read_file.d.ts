import type OpenAI from "openai";
/**
 * Creates the read_file tool definition, optionally including line_ranges support
 * based on whether partial reads are enabled.
 *
 * @param partialReadsEnabled - Whether to include line_ranges parameter
 * @returns Native tool definition for read_file
 */
export declare function createReadFileTool(partialReadsEnabled?: boolean): OpenAI.Chat.ChatCompletionTool;
export declare const read_file: OpenAI.Chat.Completions.ChatCompletionTool;

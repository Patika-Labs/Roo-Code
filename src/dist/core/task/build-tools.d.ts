import type OpenAI from "openai";
import type { ProviderSettings, ModeConfig, ModelInfo } from "@roo-code/types";
import type { ClineProvider } from "../webview/ClineProvider";
interface BuildToolsOptions {
    provider: ClineProvider;
    cwd: string;
    mode: string | undefined;
    customModes: ModeConfig[] | undefined;
    experiments: Record<string, boolean> | undefined;
    apiConfiguration: ProviderSettings | undefined;
    maxReadFileLine: number;
    browserToolEnabled: boolean;
    modelInfo?: ModelInfo;
}
/**
 * Builds the complete tools array for native protocol requests.
 * Combines native tools and MCP tools, filtered by mode restrictions.
 *
 * @param options - Configuration options for building the tools
 * @returns Array of filtered native and MCP tools
 */
export declare function buildNativeToolsArray(options: BuildToolsOptions): Promise<OpenAI.Chat.ChatCompletionTool[]>;
export {};

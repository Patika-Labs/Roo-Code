import { TextContent, ToolUse, McpToolUse } from "../../shared/tools";
export type AssistantMessageContent = TextContent | ToolUse | McpToolUse;
export declare function parseAssistantMessage(assistantMessage: string): AssistantMessageContent[];

import type { ToolName, ModeConfig } from "@roo-code/types";
import { Mode } from "../../shared/modes";
/**
 * Checks if a tool name is a valid, known tool.
 * Note: This does NOT check if the tool is allowed for a specific mode,
 * only that the tool actually exists.
 */
export declare function isValidToolName(toolName: string): toolName is ToolName;
export declare function validateToolUse(toolName: ToolName, mode: Mode, customModes?: ModeConfig[], toolRequirements?: Record<string, boolean>, toolParams?: Record<string, unknown>, experiments?: Record<string, boolean>, includedTools?: string[]): void;

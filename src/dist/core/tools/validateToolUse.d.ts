import type { ToolName, ModeConfig } from "@roo-code/types";
import { Mode } from "../../shared/modes";
export declare function validateToolUse(toolName: ToolName, mode: Mode, customModes?: ModeConfig[], toolRequirements?: Record<string, boolean>, toolParams?: Record<string, unknown>, experiments?: Record<string, boolean>, includedTools?: string[]): void;

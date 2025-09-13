import * as vscode from "vscode";
import { type ModeConfig, type PromptComponent, type CustomModePrompts, type TodoItem } from "@roo-code/types";
import { Mode } from "../../shared/modes";
import { DiffStrategy } from "../../shared/tools";
import { McpHub } from "../../services/mcp/McpHub";
import { SkillsManager } from "../../services/skills/SkillsManager";
import type { SystemPromptSettings } from "./types";
export declare function getPromptComponent(customModePrompts: CustomModePrompts | undefined, mode: string): PromptComponent | undefined;
export declare const SYSTEM_PROMPT: (context: vscode.ExtensionContext, cwd: string, supportsComputerUse: boolean, mcpHub?: McpHub, diffStrategy?: DiffStrategy, browserViewportSize?: string, mode?: Mode, customModePrompts?: CustomModePrompts, customModes?: ModeConfig[], globalCustomInstructions?: string, diffEnabled?: boolean, experiments?: Record<string, boolean>, enableMcpServerCreation?: boolean, language?: string, rooIgnoreInstructions?: string, partialReadsEnabled?: boolean, settings?: SystemPromptSettings, todoList?: TodoItem[], modelId?: string, skillsManager?: SkillsManager) => Promise<string>;

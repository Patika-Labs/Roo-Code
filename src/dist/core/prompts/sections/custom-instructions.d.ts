import type { SystemPromptSettings } from "../types";
/**
 * Load rule files from global and project-local directories
 * Global rules are loaded first, then project-local rules which can override global ones
 */
export declare function loadRuleFiles(cwd: string): Promise<string>;
export declare function addCustomInstructions(modeCustomInstructions: string, globalCustomInstructions: string, cwd: string, mode: string, options?: {
    language?: string;
    rooIgnoreInstructions?: string;
    settings?: SystemPromptSettings;
}): Promise<string>;

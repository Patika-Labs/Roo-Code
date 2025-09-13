import type { ClineProvider } from "../../core/webview/ClineProvider";
import { SkillMetadata, SkillContent } from "../../shared/skills";
export type { SkillMetadata, SkillContent };
export declare class SkillsManager {
    private skills;
    private providerRef;
    private disposables;
    private isDisposed;
    constructor(provider: ClineProvider);
    initialize(): Promise<void>;
    /**
     * Discover all skills from global and project directories.
     * Supports both generic skills (skills/) and mode-specific skills (skills-{mode}/).
     * Also supports symlinks:
     * - .roo/skills can be a symlink to a directory containing skill subdirectories
     * - .roo/skills/[dirname] can be a symlink to a skill directory
     */
    discoverSkills(): Promise<void>;
    /**
     * Scan a skills directory for skill subdirectories.
     * Handles two symlink cases:
     * 1. The skills directory itself is a symlink (resolved by directoryExists using realpath)
     * 2. Individual skill subdirectories are symlinks
     */
    private scanSkillsDirectory;
    /**
     * Load skill metadata from a skill directory.
     * @param skillDir - The resolved path to the skill directory (target of symlink if symlinked)
     * @param source - Whether this is a global or project skill
     * @param mode - The mode this skill is specific to (undefined for generic skills)
     * @param skillName - The skill name (from symlink name if symlinked, otherwise from directory name)
     */
    private loadSkillMetadata;
    /**
     * Get skills available for the current mode.
     * Resolves overrides: project > global, mode-specific > generic.
     *
     * @param currentMode - The current mode slug (e.g., 'code', 'architect')
     */
    getSkillsForMode(currentMode: string): SkillMetadata[];
    /**
     * Determine if newSkill should override existingSkill based on priority rules.
     * Priority: project > global, mode-specific > generic
     */
    private shouldOverrideSkill;
    /**
     * Get all skills (for UI display, debugging, etc.)
     */
    getAllSkills(): SkillMetadata[];
    getSkillContent(name: string, currentMode?: string): Promise<SkillContent | null>;
    /**
     * Get all skills directories to scan, including mode-specific directories.
     */
    private getSkillsDirectories;
    /**
     * Get list of available modes (built-in + custom)
     */
    private getAvailableModes;
    private getSkillKey;
    private setupFileWatchers;
    private watchDirectory;
    dispose(): Promise<void>;
}

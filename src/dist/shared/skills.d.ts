/**
 * Skill metadata for discovery (loaded at startup)
 * Only name and description are required for now
 */
export interface SkillMetadata {
    name: string;
    description: string;
    path: string;
    source: "global" | "project";
    mode?: string;
}
/**
 * Full skill content (loaded on activation)
 */
export interface SkillContent extends SkillMetadata {
    instructions: string;
}

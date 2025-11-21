import { ToolProtocol } from "@roo-code/types";
import type { ProviderSettings, ModelInfo } from "@roo-code/types";
/**
 * Resolve the effective tool protocol based on the precedence hierarchy:
 *
 * 1. User Preference - Per-Profile (explicit profile setting)
 * 2. Model Default (defaultToolProtocol in ModelInfo)
 * 3. XML Fallback (final fallback)
 *
 * Then check support: if protocol is "native" but model doesn't support it, use XML.
 *
 * @param providerSettings - The provider settings for the current profile
 * @param modelInfo - Optional model information containing capabilities
 * @returns The resolved tool protocol (either "xml" or "native")
 */
export declare function resolveToolProtocol(providerSettings: ProviderSettings, modelInfo?: ModelInfo): ToolProtocol;

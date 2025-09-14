import type { ProviderSettings } from "@roo-code/types";
/**
 * Enhances a prompt using the configured API without creating a full Cline instance or task history.
 * This is a lightweight alternative that only uses the API's completion functionality.
 */
export declare function singleCompletionHandler(apiConfiguration: ProviderSettings, promptText: string): Promise<string>;

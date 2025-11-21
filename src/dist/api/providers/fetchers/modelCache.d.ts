import type { ProviderName } from "@roo-code/types";
import type { RouterName, ModelRecord } from "../../../shared/api";
import { GetModelsOptions } from "../../../shared/api";
/**
 * Get models from the cache or fetch them from the provider and cache them.
 * There are two caches:
 * 1. Memory cache - This is a simple in-memory cache that is used to store models for a short period of time.
 * 2. File cache - This is a file-based cache that is used to store models for a longer period of time.
 *
 * @param router - The router to fetch models from.
 * @param apiKey - Optional API key for the provider.
 * @param baseUrl - Optional base URL for the provider (currently used only for LiteLLM).
 * @returns The models from the cache or the fetched models.
 */
export declare const getModels: (options: GetModelsOptions) => Promise<ModelRecord>;
/**
 * Flush models memory cache for a specific router.
 *
 * @param router - The router to flush models for.
 */
export declare const flushModels: (router: RouterName) => Promise<void>;
/**
 * Get models from cache, checking memory first, then disk.
 * This ensures providers always have access to last known good data,
 * preventing fallback to hardcoded defaults on startup.
 *
 * @param provider - The provider to get models for.
 * @returns Models from memory cache, disk cache, or undefined if not cached.
 */
export declare function getModelsFromCache(provider: ProviderName): ModelRecord | undefined;

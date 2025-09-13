import { type ModelInfo, type ProviderSettings } from "@roo-code/types";
export type ApiHandlerOptions = Omit<ProviderSettings, "apiProvider"> & {
    /**
     * When true and using GPT‑5 Responses API, include reasoning.summary: "auto"
     * so the API returns reasoning summaries (we already parse and surface them).
     * Defaults to true; set to false to disable summaries.
     */
    enableGpt5ReasoningSummary?: boolean;
};
declare const routerNames: readonly ["openrouter", "requesty", "glama", "unbound", "litellm", "ollama", "lmstudio", "io-intelligence", "deepinfra", "vercel-ai-gateway"];
export type RouterName = (typeof routerNames)[number];
export declare const isRouterName: (value: string) => value is RouterName;
export declare function toRouterName(value?: string): RouterName;
export type ModelRecord = Record<string, ModelInfo>;
export type RouterModels = Record<RouterName, ModelRecord>;
export declare const shouldUseReasoningBudget: ({ model, settings, }: {
    model: ModelInfo;
    settings?: ProviderSettings;
}) => boolean;
export declare const shouldUseReasoningEffort: ({ model, settings, }: {
    model: ModelInfo;
    settings?: ProviderSettings;
}) => boolean;
export declare const DEFAULT_HYBRID_REASONING_MODEL_MAX_TOKENS = 16384;
export declare const DEFAULT_HYBRID_REASONING_MODEL_THINKING_TOKENS = 8192;
export declare const GEMINI_25_PRO_MIN_THINKING_TOKENS = 128;
export declare const getModelMaxOutputTokens: ({ modelId, model, settings, format, }: {
    modelId: string;
    model: ModelInfo;
    settings?: ProviderSettings;
    format?: "anthropic" | "openai" | "gemini" | "openrouter";
}) => number | undefined;
export type GetModelsOptions = {
    provider: "openrouter";
} | {
    provider: "glama";
} | {
    provider: "requesty";
    apiKey?: string;
    baseUrl?: string;
} | {
    provider: "unbound";
    apiKey?: string;
} | {
    provider: "litellm";
    apiKey: string;
    baseUrl: string;
} | {
    provider: "ollama";
    baseUrl?: string;
} | {
    provider: "lmstudio";
    baseUrl?: string;
} | {
    provider: "deepinfra";
    apiKey?: string;
    baseUrl?: string;
} | {
    provider: "io-intelligence";
    apiKey: string;
} | {
    provider: "vercel-ai-gateway";
};
export {};

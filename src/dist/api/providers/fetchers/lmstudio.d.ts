import { ModelInfo } from "@roo-code/types";
import { LLMInfo, LLMInstanceInfo } from "@lmstudio/sdk";
export declare const hasLoadedFullDetails: (modelId: string) => boolean;
export declare const forceFullModelDetailsLoad: (baseUrl: string, modelId: string) => Promise<void>;
export declare const parseLMStudioModel: (rawModel: LLMInstanceInfo | LLMInfo) => ModelInfo;
export declare function getLMStudioModels(baseUrl?: string): Promise<Record<string, ModelInfo>>;

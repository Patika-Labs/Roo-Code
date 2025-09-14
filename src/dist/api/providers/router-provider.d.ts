import OpenAI from "openai";
import type { ModelInfo } from "@roo-code/types";
import { ApiHandlerOptions, RouterName, ModelRecord } from "../../shared/api";
import { BaseProvider } from "./base-provider";
type RouterProviderOptions = {
    name: RouterName;
    baseURL: string;
    apiKey?: string;
    modelId?: string;
    defaultModelId: string;
    defaultModelInfo: ModelInfo;
    options: ApiHandlerOptions;
};
export declare abstract class RouterProvider extends BaseProvider {
    protected readonly options: ApiHandlerOptions;
    protected readonly name: RouterName;
    protected models: ModelRecord;
    protected readonly modelId?: string;
    protected readonly defaultModelId: string;
    protected readonly defaultModelInfo: ModelInfo;
    protected readonly client: OpenAI;
    constructor({ options, name, baseURL, apiKey, modelId, defaultModelId, defaultModelInfo, }: RouterProviderOptions);
    fetchModel(): Promise<{
        id: string;
        info: ModelInfo;
    }>;
    getModel(): {
        id: string;
        info: ModelInfo;
    };
    protected supportsTemperature(modelId: string): boolean;
}
export {};

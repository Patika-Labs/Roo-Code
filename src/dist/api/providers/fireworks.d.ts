import { type FireworksModelId } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class FireworksHandler extends BaseOpenAiCompatibleProvider<FireworksModelId> {
    constructor(options: ApiHandlerOptions);
}

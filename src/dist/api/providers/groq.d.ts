import { type GroqModelId } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class GroqHandler extends BaseOpenAiCompatibleProvider<GroqModelId> {
    constructor(options: ApiHandlerOptions);
}

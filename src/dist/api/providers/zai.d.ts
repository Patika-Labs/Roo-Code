import type { ApiHandlerOptions } from "../../shared/api";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class ZAiHandler extends BaseOpenAiCompatibleProvider<string> {
    constructor(options: ApiHandlerOptions);
}

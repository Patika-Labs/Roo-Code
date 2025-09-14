import { type SambaNovaModelId } from "@roo-code/types";
import type { ApiHandlerOptions } from "../../shared/api";
import { BaseOpenAiCompatibleProvider } from "./base-openai-compatible-provider";
export declare class SambaNovaHandler extends BaseOpenAiCompatibleProvider<SambaNovaModelId> {
    constructor(options: ApiHandlerOptions);
}

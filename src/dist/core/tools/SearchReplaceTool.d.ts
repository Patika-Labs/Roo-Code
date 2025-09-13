import { Task } from "../task/Task";
import { BaseTool, ToolCallbacks } from "./BaseTool";
import type { ToolUse } from "../../shared/tools";
interface SearchReplaceParams {
    file_path: string;
    old_string: string;
    new_string: string;
}
export declare class SearchReplaceTool extends BaseTool<"search_replace"> {
    readonly name: "search_replace";
    parseLegacy(params: Partial<Record<string, string>>): SearchReplaceParams;
    execute(params: SearchReplaceParams, task: Task, callbacks: ToolCallbacks): Promise<void>;
    handlePartial(task: Task, block: ToolUse<"search_replace">): Promise<void>;
}
export declare const searchReplaceTool: SearchReplaceTool;
export {};

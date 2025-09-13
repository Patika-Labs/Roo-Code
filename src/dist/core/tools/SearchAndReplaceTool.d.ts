import { Task } from "../task/Task";
import { BaseTool, ToolCallbacks } from "./BaseTool";
import type { ToolUse } from "../../shared/tools";
interface SearchReplaceOperation {
    search: string;
    replace: string;
}
interface SearchAndReplaceParams {
    path: string;
    operations: SearchReplaceOperation[];
}
export declare class SearchAndReplaceTool extends BaseTool<"search_and_replace"> {
    readonly name: "search_and_replace";
    parseLegacy(params: Partial<Record<string, string>>): SearchAndReplaceParams;
    execute(params: SearchAndReplaceParams, task: Task, callbacks: ToolCallbacks): Promise<void>;
    handlePartial(task: Task, block: ToolUse<"search_and_replace">): Promise<void>;
}
export declare const searchAndReplaceTool: SearchAndReplaceTool;
export {};

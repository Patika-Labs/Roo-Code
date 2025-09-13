import { Task } from "../task/Task";
import { BaseTool, ToolCallbacks } from "./BaseTool";
import type { ToolUse } from "../../shared/tools";
interface ApplyPatchParams {
    patch: string;
}
export declare class ApplyPatchTool extends BaseTool<"apply_patch"> {
    readonly name: "apply_patch";
    parseLegacy(params: Partial<Record<string, string>>): ApplyPatchParams;
    execute(params: ApplyPatchParams, task: Task, callbacks: ToolCallbacks): Promise<void>;
    private handleAddFile;
    private handleDeleteFile;
    private handleUpdateFile;
    handlePartial(task: Task, block: ToolUse<"apply_patch">): Promise<void>;
}
export declare const applyPatchTool: ApplyPatchTool;
export {};

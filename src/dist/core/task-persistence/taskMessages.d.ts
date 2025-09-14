import type { ClineMessage } from "@roo-code/types";
export type ReadTaskMessagesOptions = {
    taskId: string;
    globalStoragePath: string;
};
export declare function readTaskMessages({ taskId, globalStoragePath, }: ReadTaskMessagesOptions): Promise<ClineMessage[]>;
export type SaveTaskMessagesOptions = {
    messages: ClineMessage[];
    taskId: string;
    globalStoragePath: string;
};
export declare function saveTaskMessages({ messages, taskId, globalStoragePath }: SaveTaskMessagesOptions): Promise<void>;

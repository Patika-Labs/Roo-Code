import { Anthropic } from "@anthropic-ai/sdk";
interface ReasoningBlock {
    type: "reasoning";
    text: string;
}
type ExtendedContentBlock = Anthropic.Messages.ContentBlockParam | ReasoningBlock;
export declare function downloadTask(dateTs: number, conversationHistory: Anthropic.MessageParam[]): Promise<void>;
export declare function formatContentBlockToMarkdown(block: ExtendedContentBlock): string;
export declare function findToolName(toolCallId: string, messages: Anthropic.MessageParam[]): string;
export {};

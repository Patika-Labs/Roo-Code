export interface ReadWithBudgetResult {
    /** The content read up to the token budget */
    content: string;
    /** Actual token count of returned content */
    tokenCount: number;
    /** Total lines in the returned content */
    lineCount: number;
    /** Whether the entire file was read (false if truncated) */
    complete: boolean;
}
export interface ReadWithBudgetOptions {
    /** Maximum tokens allowed. Required. */
    budgetTokens: number;
    /** Number of lines to buffer before token counting (default: 256) */
    chunkLines?: number;
}
/**
 * Reads a file while incrementally counting tokens, stopping when budget is reached.
 *
 * Unlike validateFileTokenBudget + extractTextFromFile, this is a single-pass
 * operation that returns the actual content up to the token limit.
 *
 * @param filePath - Path to the file to read
 * @param options - Budget and chunking options
 * @returns Content read, token count, and completion status
 */
export declare function readFileWithTokenBudget(filePath: string, options: ReadWithBudgetOptions): Promise<ReadWithBudgetResult>;

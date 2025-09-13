/**
 * Detects potential AI-generated code omissions in the given file content.
 * Looks for comments containing omission keywords that weren't in the original file.
 * @param originalFileContent The original content of the file.
 * @param newFileContent The new content of the file to check.
 * @returns True if a potential omission is detected, false otherwise.
 */
export declare function detectCodeOmission(originalFileContent: string, newFileContent: string): boolean;

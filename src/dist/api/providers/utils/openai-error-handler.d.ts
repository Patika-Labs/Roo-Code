/**
 * General error handler for OpenAI client errors
 * Transforms technical errors into user-friendly messages
 */
/**
 * Handles OpenAI client errors and transforms them into user-friendly messages
 * @param error - The error to handle
 * @param providerName - The name of the provider for context in error messages
 * @returns The original error or a transformed user-friendly error
 */
export declare function handleOpenAIError(error: unknown, providerName: string): Error;

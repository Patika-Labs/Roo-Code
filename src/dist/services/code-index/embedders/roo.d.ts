import { IEmbedder, EmbeddingResponse, EmbedderInfo } from "../interfaces/embedder";
/**
 * Roo Code Cloud implementation of the embedder interface with batching and rate limiting.
 * Roo Code Cloud provides access to embedding models through a unified proxy endpoint.
 */
export declare class RooEmbedder implements IEmbedder {
    private embeddingsClient;
    private readonly defaultModelId;
    private readonly maxItemTokens;
    private readonly baseUrl;
    private static globalRateLimitState;
    /**
     * Creates a new Roo Code Cloud embedder
     * @param modelId Optional model identifier (defaults to "openai/text-embedding-3-large")
     * @param maxItemTokens Optional maximum tokens per item (defaults to MAX_ITEM_TOKENS)
     */
    constructor(modelId?: string, maxItemTokens?: number);
    /**
     * Creates embeddings for the given texts with batching and rate limiting
     * @param texts Array of text strings to embed
     * @param model Optional model identifier
     * @returns Promise resolving to embedding response
     */
    createEmbeddings(texts: string[], model?: string): Promise<EmbeddingResponse>;
    /**
     * Helper method to handle batch embedding with retries and exponential backoff
     * @param batchTexts Array of texts to embed in this batch
     * @param model Model identifier to use
     * @returns Promise resolving to embeddings and usage statistics
     */
    private _embedBatchWithRetries;
    /**
     * Validates the Roo Code Cloud embedder configuration by testing API connectivity
     * @returns Promise resolving to validation result with success status and optional error message
     */
    validateConfiguration(): Promise<{
        valid: boolean;
        error?: string;
    }>;
    /**
     * Returns information about this embedder
     */
    get embedderInfo(): EmbedderInfo;
    /**
     * Waits if there's an active global rate limit
     */
    private waitForGlobalRateLimit;
    /**
     * Updates global rate limit state when a 429 error occurs
     */
    private updateGlobalRateLimitState;
    /**
     * Gets the current global rate limit delay
     */
    private getGlobalRateLimitDelay;
}

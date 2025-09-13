export interface ImageGenerationResult {
    success: boolean;
    imageData?: string;
    imageFormat?: string;
    error?: string;
}
interface ImageGenerationOptions {
    baseURL: string;
    authToken: string;
    model: string;
    prompt: string;
    inputImage?: string;
}
/**
 * Shared image generation implementation for OpenRouter and Roo Code Cloud providers
 */
export declare function generateImageWithProvider(options: ImageGenerationOptions): Promise<ImageGenerationResult>;
export {};

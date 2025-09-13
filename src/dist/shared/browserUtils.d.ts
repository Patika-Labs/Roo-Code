/**
 * Parses coordinate string and scales from image dimensions to viewport dimensions
 * The LLM examines the screenshot it receives (which may be downscaled by the API)
 * and reports coordinates in format: "x,y@widthxheight" where widthxheight is what the LLM observed
 *
 * Format: "x,y@widthxheight" (required)
 * Returns: scaled coordinate string "x,y" in viewport coordinates
 * Throws: Error if format is invalid or missing image dimensions
 */
export declare function scaleCoordinate(coordinate: string, viewportWidth: number, viewportHeight: number): string;
/**
 * Formats a key string into a more readable format (e.g., "Control+c" -> "Ctrl + C")
 */
export declare function prettyKey(k?: string): string;
/**
 * Wrapper around scaleCoordinate that handles failures gracefully by checking for simple coordinates
 */
export declare function getViewportCoordinate(coord: string | undefined, viewportWidth: number, viewportHeight: number): string;

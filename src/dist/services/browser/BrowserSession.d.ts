import * as vscode from "vscode";
import { Page } from "puppeteer-core";
import { BrowserActionResult } from "../../shared/ExtensionMessage";
export declare class BrowserSession {
    private context;
    private browser?;
    private page?;
    private currentMousePosition?;
    private lastConnectionAttempt?;
    private isUsingRemoteBrowser;
    private onStateChange?;
    private lastViewportWidth?;
    private lastViewportHeight?;
    constructor(context: vscode.ExtensionContext, onStateChange?: (isActive: boolean) => void);
    private ensureChromiumExists;
    /**
     * Gets the viewport size from global state or returns default
     */
    private getViewport;
    /**
     * Launches a local browser instance
     */
    private launchLocalBrowser;
    /**
     * Connects to a browser using a WebSocket URL
     */
    private connectWithChromeHostUrl;
    /**
     * Attempts to connect to a remote browser using various methods
     * Returns true if connection was successful, false otherwise
     */
    private connectToRemoteBrowser;
    launchBrowser(): Promise<void>;
    /**
     * Closes the browser and resets browser state
     */
    closeBrowser(): Promise<BrowserActionResult>;
    /**
     * Resets all browser state variables
     */
    private resetBrowserState;
    doAction(action: (page: Page) => Promise<void>): Promise<BrowserActionResult>;
    /**
     * Extract the root domain from a URL
     * e.g., http://localhost:3000/path -> localhost:3000
     * e.g., https://example.com/path -> example.com
     */
    private getRootDomain;
    /**
     * Navigate to a URL with standard loading options
     */
    private navigatePageToUrl;
    /**
     * Creates a new tab and navigates to the specified URL
     */
    private createNewTab;
    navigateToUrl(url: string): Promise<BrowserActionResult>;
    private waitTillHTMLStable;
    /**
     * Force links and window.open to navigate in the same tab.
     * This makes clicks on anchors with target="_blank" stay in the current page
     * and also intercepts window.open so SPA/open-in-new-tab patterns don't spawn popups.
     */
    private forceLinksToSameTab;
    /**
     * Handles mouse interaction with network activity monitoring
     */
    private handleMouseInteraction;
    click(coordinate: string): Promise<BrowserActionResult>;
    type(text: string): Promise<BrowserActionResult>;
    press(key: string): Promise<BrowserActionResult>;
    /**
     * Scrolls the page by the specified amount
     */
    private scrollPage;
    scrollDown(): Promise<BrowserActionResult>;
    scrollUp(): Promise<BrowserActionResult>;
    hover(coordinate: string): Promise<BrowserActionResult>;
    resize(size: string): Promise<BrowserActionResult>;
    /**
     * Determines image type from file extension
     */
    private getImageTypeFromPath;
    /**
     * Takes a screenshot and saves it to the specified file path.
     * @param filePath - The destination file path (relative to workspace)
     * @param cwd - Current working directory for resolving relative paths
     * @returns BrowserActionResult with screenshot data and saved file path
     * @throws Error if the resolved path escapes the workspace directory
     */
    saveScreenshot(filePath: string, cwd: string): Promise<BrowserActionResult>;
    /**
     * Draws a cursor indicator on the page at the specified position
     */
    private drawCursorIndicator;
    /**
     * Removes the cursor indicator from the page
     */
    private removeCursorIndicator;
    /**
     * Returns whether a browser session is currently active
     */
    isSessionActive(): boolean;
    /**
     * Returns the last known viewport size (if any)
     *
     * Prefer the live page viewport when available so we stay accurate after:
     * - browser_action resize
     * - manual window resizes (especially with remote browsers)
     *
     * Falls back to the configured default viewport when no prior information exists.
     */
    getViewportSize(): {
        width?: number;
        height?: number;
    };
}

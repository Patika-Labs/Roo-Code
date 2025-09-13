import type { ClineMessage } from "@roo-code/types";
import type { ClineProvider } from "./ClineProvider";
export declare class BrowserSessionPanelManager {
    private readonly provider;
    private static instances;
    private panel;
    private disposables;
    private isReady;
    private pendingUpdate?;
    private pendingNavigateIndex?;
    private userManuallyClosedPanel;
    private constructor();
    /**
     * Get or create a BrowserSessionPanelManager instance for the given provider
     */
    static getInstance(provider: ClineProvider): BrowserSessionPanelManager;
    /**
     * Show the browser session panel, creating it if necessary
     */
    show(): Promise<void>;
    private createOrShowPanel;
    updateBrowserSession(messages: ClineMessage[], isBrowserSessionActive: boolean): Promise<void>;
    /**
     * Navigate the Browser Session panel to a specific step index.
     * If the panel isn't ready yet, queue the navigation to run after handshake.
     */
    navigateToStep(stepIndex: number): Promise<void>;
    /**
     * Reset the manual close flag (call this when a new browser session launches)
     */
    resetManualCloseFlag(): void;
    /**
     * Check if auto-opening should be allowed (not manually closed by user)
     */
    shouldAllowAutoOpen(): boolean;
    /**
     * Whether the Browser Session panel is currently open.
     */
    isOpen(): boolean;
    /**
     * Toggle the Browser Session panel visibility.
     * - If open: closes it
     * - If closed: opens it and sends initial session snapshot
     */
    toggle(): Promise<void>;
    dispose(): void;
    private getHMRHtmlContent;
    private getHtmlContent;
}

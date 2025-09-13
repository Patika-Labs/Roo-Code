import type { ExtensionContext } from "vscode";
import { z } from "zod";
export declare const CLAUDE_CODE_OAUTH_CONFIG: {
    readonly authorizationEndpoint: "https://claude.ai/oauth/authorize";
    readonly tokenEndpoint: "https://console.anthropic.com/v1/oauth/token";
    readonly clientId: "9d1c250a-e61b-44d9-88ed-5944d1962f5e";
    readonly redirectUri: "http://localhost:54545/callback";
    readonly scopes: "org:create_api_key user:profile user:inference";
    readonly callbackPort: 54545;
};
declare const claudeCodeCredentialsSchema: z.ZodObject<{
    type: z.ZodLiteral<"claude">;
    access_token: z.ZodString;
    refresh_token: z.ZodString;
    expired: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "claude";
    access_token: string;
    refresh_token: string;
    expired: string;
    email?: string | undefined;
}, {
    type: "claude";
    access_token: string;
    refresh_token: string;
    expired: string;
    email?: string | undefined;
}>;
export type ClaudeCodeCredentials = z.infer<typeof claudeCodeCredentialsSchema>;
/**
 * Generates a cryptographically random PKCE code verifier
 * Must be 43-128 characters long using unreserved characters
 */
export declare function generateCodeVerifier(): string;
/**
 * Generates the PKCE code challenge from the verifier using S256 method
 */
export declare function generateCodeChallenge(verifier: string): string;
/**
 * Generates a random state parameter for CSRF protection
 */
export declare function generateState(): string;
/**
 * Generates a user_id in the format required by Claude Code API
 * Format: user_<hash>_account_<uuid>_session_<uuid>
 */
export declare function generateUserId(email?: string): string;
/**
 * Builds the authorization URL for OAuth flow
 */
export declare function buildAuthorizationUrl(codeChallenge: string, state: string): string;
/**
 * Exchanges the authorization code for tokens
 */
export declare function exchangeCodeForTokens(code: string, codeVerifier: string, state: string): Promise<ClaudeCodeCredentials>;
/**
 * Refreshes the access token using the refresh token
 */
export declare function refreshAccessToken(refreshToken: string): Promise<ClaudeCodeCredentials>;
/**
 * Checks if the credentials are expired (with 5 minute buffer)
 */
export declare function isTokenExpired(credentials: ClaudeCodeCredentials): boolean;
/**
 * ClaudeCodeOAuthManager - Handles OAuth flow and token management
 */
export declare class ClaudeCodeOAuthManager {
    private context;
    private credentials;
    private pendingAuth;
    /**
     * Initialize the OAuth manager with VS Code extension context
     */
    initialize(context: ExtensionContext): void;
    /**
     * Load credentials from storage
     */
    loadCredentials(): Promise<ClaudeCodeCredentials | null>;
    /**
     * Save credentials to storage
     */
    saveCredentials(credentials: ClaudeCodeCredentials): Promise<void>;
    /**
     * Clear credentials from storage
     */
    clearCredentials(): Promise<void>;
    /**
     * Get a valid access token, refreshing if necessary
     */
    getAccessToken(): Promise<string | null>;
    /**
     * Get the user's email from credentials
     */
    getEmail(): Promise<string | null>;
    /**
     * Check if the user is authenticated
     */
    isAuthenticated(): Promise<boolean>;
    /**
     * Start the OAuth authorization flow
     * Returns the authorization URL to open in browser
     */
    startAuthorizationFlow(): string;
    /**
     * Start a local server to receive the OAuth callback
     * Returns a promise that resolves when authentication is complete
     */
    waitForCallback(): Promise<ClaudeCodeCredentials>;
    /**
     * Cancel any pending authorization flow
     */
    cancelAuthorizationFlow(): void;
    /**
     * Get the current credentials (for display purposes)
     */
    getCredentials(): ClaudeCodeCredentials | null;
}
export declare const claudeCodeOAuthManager: ClaudeCodeOAuthManager;
export {};

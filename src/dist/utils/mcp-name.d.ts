/**
 * Utilities for sanitizing MCP server and tool names to conform to
 * API function name requirements across all providers.
 */
/**
 * Separator used between MCP prefix, server name, and tool name.
 * We use "--" (double hyphen) because:
 * 1. It's allowed by all providers (dashes are permitted in function names)
 * 2. It won't conflict with underscores in sanitized server/tool names
 * 3. It's unique enough to be a reliable delimiter for parsing
 */
export declare const MCP_TOOL_SEPARATOR = "--";
/**
 * Prefix for all MCP tool function names.
 */
export declare const MCP_TOOL_PREFIX = "mcp";
/**
 * Sanitize a name to be safe for use in API function names.
 * This removes special characters and ensures the name starts correctly.
 *
 * Note: This does NOT remove dashes from names, but the separator "--" is
 * distinct enough (double hyphen) that single hyphens in names won't conflict.
 *
 * @param name - The original name (e.g., MCP server name or tool name)
 * @returns A sanitized name that conforms to API requirements
 */
export declare function sanitizeMcpName(name: string): string;
/**
 * Build a full MCP tool function name from server and tool names.
 * The format is: mcp--{sanitized_server_name}--{sanitized_tool_name}
 *
 * The total length is capped at 64 characters to conform to API limits.
 *
 * @param serverName - The MCP server name
 * @param toolName - The tool name
 * @returns A sanitized function name in the format mcp--serverName--toolName
 */
export declare function buildMcpToolName(serverName: string, toolName: string): string;
/**
 * Parse an MCP tool function name back into server and tool names.
 * This handles sanitized names by splitting on the "--" separator.
 *
 * Note: This returns the sanitized names, not the original names.
 * The original names cannot be recovered from the sanitized version.
 *
 * @param mcpToolName - The full MCP tool name (e.g., "mcp--weather--get_forecast")
 * @returns An object with serverName and toolName, or null if parsing fails
 */
export declare function parseMcpToolName(mcpToolName: string): {
    serverName: string;
    toolName: string;
} | null;

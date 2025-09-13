import { McpHub } from "../../../services/mcp/McpHub";
import { DiffStrategy } from "../../../shared/tools";
export declare function createMCPServerInstructions(mcpHub: McpHub | undefined, diffStrategy: DiffStrategy | undefined): Promise<string>;

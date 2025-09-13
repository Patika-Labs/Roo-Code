import { DiffStrategy } from "../../../shared/tools";
import { McpHub } from "../../../services/mcp/McpHub";
import { CodeIndexManager } from "../../../services/code-index/manager";
export declare function getCapabilitiesSection(cwd: string, supportsComputerUse: boolean, mcpHub?: McpHub, diffStrategy?: DiffStrategy, codeIndexManager?: CodeIndexManager): string;

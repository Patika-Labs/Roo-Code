import * as fs from "fs/promises";
import { Parser, Language } from "web-tree-sitter";
export declare const mockedFs: import("vitest").MockedObject<typeof fs>;
export declare const DEBUG: number;
export declare const debugLog: (message: string, ...args: any[]) => void;
export declare function initializeTreeSitter(): Promise<{
    Parser: typeof Parser;
    Language: typeof Language;
}>;
export declare function testParseSourceCodeDefinitions(testFilePath: string, content: string, options?: {
    language?: string;
    wasmFile?: string;
    queryString?: string;
    extKey?: string;
}): Promise<string | undefined>;
export declare function inspectTreeStructure(content: string, language?: string): Promise<string>;

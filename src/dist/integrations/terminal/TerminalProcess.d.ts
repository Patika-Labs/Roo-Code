import { BaseTerminalProcess } from "./BaseTerminalProcess";
import { Terminal } from "./Terminal";
export declare class TerminalProcess extends BaseTerminalProcess {
    private terminalRef;
    constructor(terminal: Terminal);
    get terminal(): Terminal;
    run(command: string): Promise<void>;
    continue(): void;
    abort(): void;
    hasUnretrievedOutput(): boolean;
    getUnretrievedOutput(): string;
    private emitRemainingBufferIfListening;
    private stringIndexMatch;
    private removeEscapeSequences;
    /**
     * Helper function to match VSCode shell integration start markers (C).
     * Looks for content after ]633;C or ]133;C markers.
     * If both exist, takes the content after the last marker found.
     */
    private matchAfterVsceStartMarkers;
    /**
     * Helper function to match VSCode shell integration end markers (D).
     * Looks for content before ]633;D or ]133;D markers.
     * If both exist, takes the content before the first marker found.
     */
    private matchBeforeVsceEndMarkers;
    /**
     * Handles VSCode shell integration markers for command output:
     *
     * For C (Command Start):
     * - Looks for content after ]633;C or ]133;C markers
     * - These markers indicate the start of command output
     * - If both exist, takes the content after the last marker found
     * - This ensures we get the actual command output after any shell integration prefixes
     *
     * For D (Command End):
     * - Looks for content before ]633;D or ]133;D markers
     * - These markers indicate command completion
     * - If both exist, takes the content before the first marker found
     * - This ensures we don't include shell integration suffixes in the output
     *
     * In both cases, checks 633 first since it's more commonly used in VSCode shell integration
     *
     * @param data The string to search for markers in
     * @param prefix633 The 633 marker to match after (for C markers)
     * @param prefix133 The 133 marker to match after (for C markers)
     * @param suffix633 The 633 marker to match before (for D markers)
     * @param suffix133 The 133 marker to match before (for D markers)
     * @returns The content between/after markers, or undefined if no markers found
     *
     * Note: Always makes exactly 2 calls to stringIndexMatch regardless of match results.
     * Using string indexOf matching is ~500x faster than regular expressions, so even
     * matching twice is still very efficient comparatively.
     */
    private matchVsceMarkers;
}

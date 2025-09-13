declare const mockExeca: import("vitest").Mock<(...args: any[]) => any>;
declare const mockStdin: {
    write: import("vitest").Mock<(data: any, encoding: any, callback: any) => void>;
    end: import("vitest").Mock<(...args: any[]) => any>;
};
declare const createMockProcess: () => {
    stdin: {
        write: import("vitest").Mock<(data: any, encoding: any, callback: any) => void>;
        end: import("vitest").Mock<(...args: any[]) => any>;
    };
    stdout: {
        on: import("vitest").Mock<(...args: any[]) => any>;
    };
    stderr: {
        on: import("vitest").Mock<(event: any, callback: any) => void>;
    };
    on: import("vitest").Mock<(event: any, callback: any) => void>;
    killed: boolean;
    kill: import("vitest").Mock<(...args: any[]) => any>;
    then: <TResult1 = {
        exitCode: number;
    }, TResult2 = never>(onfulfilled?: ((value: {
        exitCode: number;
    }) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
    catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<{
        exitCode: number;
    } | TResult>;
    finally: (onfinally?: (() => void) | null | undefined) => Promise<{
        exitCode: number;
    }>;
};
declare let mockReadlineInterface: any;

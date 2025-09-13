declare global {
    namespace NodeJS {
        interface Global {
            __TEST_ENV__: {
                platform: string;
                isPowerShellAvailable: boolean;
            };
        }
    }
}
export {};

declare const search_and_replace: {
    type: "function";
    function: {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                path: {
                    type: string;
                    description: string;
                };
                operations: {
                    type: string;
                    description: string;
                    items: {
                        type: string;
                        properties: {
                            search: {
                                type: string;
                                description: string;
                            };
                            replace: {
                                type: string;
                                description: string;
                            };
                        };
                        required: string[];
                    };
                    minItems: number;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
    };
};
export default search_and_replace;

declare const _default: {
    type: "function";
    function: {
        name: string;
        description: string;
        strict: false;
        parameters: {
            type: string;
            properties: {
                action: {
                    type: string;
                    description: string;
                    enum: string[];
                };
                url: {
                    type: string[];
                    description: string;
                };
                coordinate: {
                    type: string[];
                    description: string;
                };
                size: {
                    type: string[];
                    description: string;
                };
                text: {
                    type: string[];
                    description: string;
                };
                path: {
                    type: string[];
                    description: string;
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
    };
};
export default _default;

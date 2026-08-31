"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerIflowExampleHandler = void 0;
const zod_1 = require("zod");
const fileBasedUtils_1 = require("../../utils/fileBasedUtils");
const examples_1 = require("../../api/iflow/examples");
const registerIflowExampleHandler = (server) => {
    server.registerToolIntegrationSuite("list-iflow-examples", `
Get a list of available iflow examples.
You can use these examples to query get-iflow-example
        `, {}, async () => {
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(examples_1.availableExamples),
                },
            ],
        };
    });
    server.registerToolIntegrationSuite("get-iflow-example", `
Get an existing iflow as an example to use to create or update other iflows
Call list-iflow-examples to show available examples
        `, {
        name: zod_1.z
            .enum(Object.keys(examples_1.availableExamples))
            .describe("Example name from list-iflow-examples"),
    }, async ({ name }) => {
        const exampleObj = examples_1.availableExamples[name];
        if (!exampleObj) {
            return {
                content: [
                    {
                        type: "text",
                        text: "Unknown example, please use list-iflow-examples",
                    },
                ],
                isError: true,
            };
        }
        try {
            return {
                content: [
                    {
                        type: "text",
                        text: await (0, fileBasedUtils_1.parseFolder)(exampleObj._path),
                    },
                ],
            };
        }
        catch (error) {
            return {
                content: [
                    {
                        type: "text",
                        text: "Error getting provided example",
                    },
                ],
                isError: true,
            };
        }
    });
};
exports.registerIflowExampleHandler = registerIflowExampleHandler;
//# sourceMappingURL=exmaples.js.map
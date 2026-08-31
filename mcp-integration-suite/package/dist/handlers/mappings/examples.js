"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMappingsExampleHandler = void 0;
const examples_1 = require("../../api/mappings/examples");
const fileBasedUtils_1 = require("../../utils/fileBasedUtils");
const zod_1 = require("zod");
const registerMappingsExampleHandler = (server) => {
    server.registerToolIntegrationSuite("list-mapping-examples", `Get all available message mapping examples.
This is useful to edit existing or develope new message mappings
A message mapping is a folder with contains one .mmap file which is the actual mapping.
It can also include datatypes, scripts and other dependencies
src/main/resources/ is the root
src/main/resources/mapping contains message mappings in format <mappingname>.mmap with xml structure
src/main/resources/xsd contains all xsd file in format <filename>.xsd
src/main/resources/scripts contains groovy and javascript scripts that can be used within iflow
src/main/resources/scenarioflows/mapping/<mapping id>.mmap contains the mapping in xml structure`, {}, async () => {
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(examples_1.availableExamples),
                },
            ],
        };
    });
    server.registerToolIntegrationSuite("get-mapping-example", "Get an example provided by list-mapping-examples", {
        name: zod_1.z
            .enum(Object.keys(examples_1.availableExamples))
            .describe("Example name from list-mapping-examples"),
    }, async ({ name }) => {
        const exampleObj = examples_1.availableExamples[name];
        if (!exampleObj) {
            return {
                content: [
                    {
                        type: "text",
                        text: "Unknown example, please use list-mapping-examples",
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
exports.registerMappingsExampleHandler = registerMappingsExampleHandler;
//# sourceMappingURL=examples.js.map
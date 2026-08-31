"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMappingsHandler = void 0;
const __1 = require("../..");
const mappings_1 = require("../../api/mappings");
const zod_1 = require("zod");
const tools_1 = require("../iflow/tools");
const deployment_1 = require("../../api/deployment");
const customErrHandler_1 = require("../../utils/customErrHandler");
const messageLogs_1 = require("../../api/messages/messageLogs");
const registerMappingsHandler = (server) => {
    server.registerToolIntegrationSuite("get-messagemapping", `Get the data of an Message Mapping and the contained ressources. 
    Some ressources might relay on other package artefacts which are not included but reffrenced
    `, {
        id: zod_1.z.string().describe("ID of the Message Mapping"),
    }, async ({ id }) => {
        (0, __1.logInfo)(`trying to get message mapping ${id}`);
        try {
            const fileContent = await (0, mappings_1.getMessageMappingContentString)(id);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            type: "success",
                            messageMappingContent: fileContent,
                        }),
                    },
                ],
            };
        }
        catch (error) {
            (0, __1.logError)(error);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ type: "error", error }),
                    },
                ],
                isError: true,
            };
        }
    });
    server.registerToolIntegrationSuite("update-message-mapping", `Update or create files/content of an message mapping
    You only have to provide files that need to be updated but allways send the full file
    Make sure you ONLY change the things the user instructs you to and keep all other things

	If you encounter problems updating/deploying mappings consider looking at the available examples

    Folder structure is like this:
    src/main/resources/ is the root
    src/main/resources/mapping contains message mappings in format <mappingname>.mmap with xml structure
    src/main/resources/xsd contains all xsd file in format <filename>.xsd
    src/main/resources/scripts contains groovy and javascript scripts that can be used within message mapping
    src/main/resources/mapping/<message mapping id>.mmap contains the mapping in xml structure
            `, {
        id: zod_1.z.string().describe("ID of the messageMapping"),
        files: tools_1.updateFiles,
        autoDeploy: zod_1.z
            .boolean()
            .describe("True if messageMapping should be deployed after updateing, false if not"),
    }, async ({ id, files, autoDeploy }) => {
        (0, __1.logInfo)(`Updating messageMapping ${id} autodeploy: ${autoDeploy}`);
        try {
            const result = await (0, mappings_1.updateMessageMapping)(id, files);
            (0, __1.logInfo)("messageMapping updated successfully");
            if (autoDeploy) {
                (0, __1.logInfo)("auto deploy is activated");
                await (0, mappings_1.saveAsNewVersion)(id);
                try {
                    const taskId = await (0, mappings_1.deployMapping)(id);
                    const deployStatus = await (0, deployment_1.waitAndGetDeployStatus)(taskId);
                    result["deployStatus"] = deployStatus;
                }
                catch (error) {
                    result["deployStatus"] =
                        "Unable to check deployment status for message mapping";
                }
            }
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            type: "server response",
                            content: result,
                        }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
    server.registerToolIntegrationSuite("deploy-message-mapping", `
        deploy a message-mapping
        If the deployment status is unsuccessful try getting information from get-deploy-error
                `, { mappingId: zod_1.z.string().describe("ID/Name of message-mapping") }, async ({ mappingId }) => {
        try {
            const taskId = await (0, mappings_1.deployMapping)(mappingId);
            const deployStatus = await (0, deployment_1.waitAndGetDeployStatus)(taskId);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ deployStatus }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
    server.registerToolIntegrationSuite("create-empty-mapping", `Create an empty message mapping without functionality. You probably want to add content to it afterwards with tool get-mapping and then update-mapping
		Be aware that most of the time you don't need to create an extra mapping. Most scenarios have a mapping within the iflow. Consider looking at iflow examples`, {
        packageId: zod_1.z.string().describe("Package ID"),
        id: zod_1.z.string().describe("ID/Name of the Message Mapping"),
    }, async ({ packageId, id }) => {
        try {
            await (0, mappings_1.createMessageMapping)(packageId, id);
            return {
                content: [
                    {
                        type: "text",
                        text: "Message Mapping successfully created. You can now use get-messagemapping and then edit it and upload with update-message-mapping",
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
    server.registerToolIntegrationSuite("get-all-messagemappings", "Get all available message mappings", {}, async () => {
        try {
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            messageMappings: await (0, mappings_1.getAllMessageMappings)(),
                        }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
    server.registerToolIntegrationSuite("create-mapping-testiflow", `Creates an iflow called if_echo_mapping
This iflow can be used to test mappings, it returns the content after mapping.
Allways run this tool before using the test iflow because it resets old content of the iflow.
To test a mapping use the usual update procedure but replace the current mapping and datatypes with yours
The endpoint can also be found using the regular endpoint finding procedure`, {
        pkgId: zod_1.z
            .string()
            .describe("Package in which the iflow should get created"),
    }, async ({ pkgId }) => {
        try {
            await (0, messageLogs_1.createMappingTestIflow)(pkgId);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            status: "SUCCESS",
                            message: `iflow if_echo_mapping created.
							You can now go on by applying your message mapping to the iflow.
							To send a test message use the get get-iflow-endpoints tool and then the send-http-message to send test messages
							Don't forget to deploy tho`,
                        }),
                    },
                ],
            };
        }
        catch (error) {
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
};
exports.registerMappingsHandler = registerMappingsHandler;
//# sourceMappingURL=index.js.map
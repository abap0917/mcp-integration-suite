"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMessageHandlers = void 0;
const types_1 = require("./types");
const messageLogs_1 = require("../../api/messages/messageLogs");
const customErrHandler_1 = require("../../utils/customErrHandler");
const sendMessageToCPI_1 = require("../../api/messages/sendMessageToCPI");
const registerMessageHandlers = (server) => {
    server.registerToolIntegrationSuite("send-http-message", `
send an HTTP request to integration suite.
If you need to get HTTP Endpoints please use get-iflow-endpoints
Please only provide HTTP Path without endpoint etc if the URL is https://abc123.itcpi01-rt-cfapps.aa11.hana.ondemand.com/http/myendpoint You should send /http/myendpoint

The URI path will allways be prefixed with protocol

This tool can be used to test mappings together with the endpoint of iflow if_echo_mapping by updating iflow with corresponding mapping
If you get a error response you can use get-messages functionality to find out more about the error
If not specified otherwise the user probably wants to see the text in response

Currently only non CSRF-protected endpoints are supported for POST requests, which could be a reason for 403 or 401
        `, types_1.sendRequestSchema, async ({ path, method, contentType, body, headers }) => {
        try {
            const requestResult = await (0, sendMessageToCPI_1.sendRequestToCPI)(path, method, contentType, body, headers);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(requestResult),
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
    server.registerToolIntegrationSuite("get-messages", `
Get message from the message monitoring
This will include information about errors, attachements etc.
It will only get top 50 messages because otherwise the request could get too big
For bigger querys which don't need content of the messages consider using count-messages
		`, {
        filterProps: types_1.messageFilterSchema,
    }, async ({ filterProps }) => {
        try {
            const messages = await (0, messageLogs_1.getMessages)(filterProps);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ messages }),
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
    server.registerToolIntegrationSuite("count-messages", `Count messages from the message monitoring
This function can be usefull for making evaluations by counting messages with specific filters`, {
        filterProps: types_1.messageFilterSchema,
    }, async ({ filterProps }) => {
        try {
            const msgCount = await (0, messageLogs_1.getMessagesCount)(filterProps);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            success: `Found ${msgCount} messages with filter criteria`,
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
exports.registerMessageHandlers = registerMessageHandlers;
//# sourceMappingURL=index.js.map
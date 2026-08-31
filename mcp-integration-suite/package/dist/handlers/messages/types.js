"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageFilterSchema = exports.sendRequestSchema = void 0;
const zod_1 = require("zod");
exports.sendRequestSchema = {
    path: zod_1.z.string().describe("HTTP Path to send the request to"),
    method: zod_1.z
        .union([
        zod_1.z.literal("GET"),
        zod_1.z.literal("POST"),
        zod_1.z.literal("PUT"),
        zod_1.z.literal("DELETE"),
    ])
        .default('POST')
        .describe("HTTP Method to use"),
    body: zod_1.z.string().optional().describe("request body"),
    headers: zod_1.z
        .array(zod_1.z.object({
        key: zod_1.z.string().describe("header"),
        value: zod_1.z.string().describe("Header Value"),
    }))
        .optional()
        .describe("Additional Request headers in key/value format"),
    contentType: zod_1.z.string().default('application/json').describe('Content type used in header. Defaults to application/json'),
};
exports.messageFilterSchema = zod_1.z
    .object({
    LogStart: zod_1.z
        .string()
        .optional()
        .describe("Starting date/time of selection in format 2017-04-13T15:51:04"),
    LogEnd: zod_1.z
        .string()
        .optional()
        .describe("End of selection of messages in format 2017-04-13T15:51:04"),
    integrationFlowId: zod_1.z
        .string()
        .optional()
        .describe("Filter by messages from one Iflow only"),
    // TODO: make union for available statuses
    status: zod_1.z
        .array(zod_1.z.union([
        zod_1.z.literal("INFO"),
        zod_1.z.literal("RETRY"),
        zod_1.z.literal("FAILED"),
        zod_1.z.literal("ABANDONED"),
        zod_1.z.literal("COMPLETED"),
        zod_1.z.literal("PROCESSING"),
        zod_1.z.literal("ESCALATED"),
        zod_1.z.literal("DISCARDED"),
    ]))
        .optional()
        .describe("filter by message statuses"),
    sender: zod_1.z.string().optional().describe("Filter by message sender"),
    receiver: zod_1.z.string().optional().describe("Filter by message receiver"),
    msgGUID: zod_1.z.string().optional().describe("Unique message ID"),
})
    .describe("available filtering options");
//# sourceMappingURL=types.js.map
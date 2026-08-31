"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPackageHandlers = void 0;
const zod_1 = require("zod");
const packages_1 = require("../../api/packages");
const customErrHandler_1 = require("../../utils/customErrHandler");
const registerPackageHandlers = (server) => {
    server.registerToolIntegrationSuite("packages", "Get all integration packages", {}, async () => {
        try {
            const allPackages = await (0, packages_1.getPackages)();
            return {
                content: [
                    { type: "text", text: JSON.stringify(allPackages) },
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
    server.registerToolIntegrationSuite("package", "Get Content of a integration package by name", {
        name: zod_1.z.string().describe("Name/ID of the package"),
    }, async ({ name }) => {
        try {
            const packageContent = await (0, packages_1.getPackage)(name);
            return {
                content: [
                    { type: "text", text: JSON.stringify(packageContent) },
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
    server.registerToolIntegrationSuite("create-package", "Create a new integration package", {
        id: zod_1.z.string().describe("ID of the package"),
        name: zod_1.z
            .string()
            .optional()
            .describe("Package Name (uses ID by default)"),
        shortText: zod_1.z
            .string()
            .optional()
            .describe("Short text of the package"),
    }, async ({ id, name, shortText }) => {
        try {
            const packageContent = await (0, packages_1.createPackage)(id, name, shortText);
            return {
                content: [
                    { type: "text", text: JSON.stringify(packageContent) },
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
exports.registerPackageHandlers = registerPackageHandlers;
//# sourceMappingURL=index.js.map
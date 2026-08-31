"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDocsHandlers = void 0;
const zod_1 = require("zod");
const __1 = require("../..");
const promises_1 = __importDefault(require("fs/promises"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const glob_1 = require("glob");
const customErrHandler_1 = require("../../utils/customErrHandler");
const getDocsMap = () => {
    const baseDocPath = path_1.default.join(__1.projPath, "resources", "Docs", "ISuite");
    const allFiles = (0, glob_1.globSync)(path_1.default.join(baseDocPath, "**", "*.md").replace(/\\/g, '/'), { nodir: true });
    const resultObj = {};
    for (const file of allFiles) {
        const displayFile = path_1.default.relative(baseDocPath, file);
        resultObj[displayFile] = fs_1.default.readFileSync(file).toString("utf-8");
    }
    return resultObj;
};
const docsMap = getDocsMap();
const registerDocsHandlers = (server) => {
    server.registerToolIntegrationSuite("get-docs", "Get indexed documentation parts. From the index of the SAP integration Suite documentation jump to any part of the documentation you want", {
        docPath: zod_1.z.string().describe(`
Internal documentation path e.g. 40-RemoteSystems/basic-authentication-of-an-idp-user-for-api-clients-57f104d.md
If not provided it returns the index`).optional()
    }, async ({ docPath }) => {
        docPath = docPath ? docPath : "index.md";
        const fullDocPath = path_1.default.join(__1.projPath, "resources", "Docs", "ISuite", docPath);
        const docStr = (await promises_1.default.readFile(fullDocPath)).toString();
        const formattedString = JSON.stringify({
            docPath,
            text: docStr
        });
        return {
            content: [{
                    type: "text",
                    text: formattedString
                }]
        };
    });
    server.registerToolIntegrationSuite("search-docs", "Search for docs based on keywords", {
        keywords: zod_1.z.array(zod_1.z.string()).describe("Search keywords"),
        matchAll: zod_1.z.boolean().describe("If true it must match all keywords, if false only one of the provided keywords")
    }, async ({ keywords, matchAll }) => {
        try {
            const matches = {};
            Object.entries(docsMap).forEach(docPage => {
                const [key, value] = docPage;
                let hasUnmatchedKeyword = false;
                for (const keyword of keywords) {
                    if (matchAll && hasUnmatchedKeyword) {
                        continue;
                    }
                    if (value.includes(keyword)) {
                        matches[key] = value;
                        continue;
                    }
                    if (matchAll && matches[key]) {
                        delete matches[key];
                    }
                    hasUnmatchedKeyword = true;
                }
                hasUnmatchedKeyword = false;
            });
            const result = JSON.stringify(matches);
            if (result.length > 1000000) {
                throw new Error(`Your search returned documents with a total length of ${result.length}.
                    Please use diffrent search parameters. Total length must be < 1000000`);
            }
            return {
                content: [{
                        type: "text",
                        text: result
                    }]
            };
        }
        catch (error) {
            (0, __1.logError)(error);
            return {
                isError: true,
                content: [(0, customErrHandler_1.formatError)(error)],
            };
        }
    });
};
exports.registerDocsHandlers = registerDocsHandlers;
//# sourceMappingURL=index.js.map
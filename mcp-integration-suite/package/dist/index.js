"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = exports.logError = exports.projPath = void 0;
// First call so the imports can use the variable
const path_1 = __importDefault(require("path"));
exports.projPath = path_1.default.resolve(__dirname, "..");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const handlers_1 = require("./handlers");
const dotenv_1 = require("dotenv");
const process_1 = require("process");
require("./utils/logging"); // Removed .js again
const logging_1 = require("./utils/logging"); // Removed .js again
const middleware_1 = require("./utils/middleware");
require("./utils/exitHandler");
const exitHandler_1 = require("./utils/exitHandler");
process.on("uncaughtException", (err) => {
    (0, exports.logError)(err);
    (0, process_1.exit)(2);
});
(0, dotenv_1.config)({ path: path_1.default.join(exports.projPath, ".env") });
const server = new middleware_1.McpServerWithMiddleware({
    name: "integration-suite",
    version: "1.0.0",
}, {
    capabilities: {
        resources: {},
        tools: {},
    },
});
(0, handlers_1.registerAllHandlers)(server);
async function main() {
    (0, exitHandler_1.registerDeleteTempOnExit)();
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
}
const logError = (msg) => {
    (0, logging_1.writeToErrLog)(msg);
    try {
        // just causes lots of error messages on most client because it is not implemented
        //server.server.sendLoggingMessage({level: "error", data: JSON.stringify(msg)});
    }
    catch { }
};
exports.logError = logError;
const logInfo = (msg) => {
    (0, logging_1.writeToLog)(msg);
    try {
        //server.server.sendLoggingMessage({level: "info", data: JSON.stringify(msg)});
    }
    catch { }
};
exports.logInfo = logInfo;
if (!process.env.JEST_WORKER_ID) {
    main()
        .catch((err) => {
        (0, exports.logError)(err);
        console.error(err);
        (0, process_1.exit)(1);
    })
        .then(() => (0, logging_1.writeToLog)("server started"));
}
//# sourceMappingURL=index.js.map
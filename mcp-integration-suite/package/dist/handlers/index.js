"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAllHandlers = void 0;
const packages_1 = require("./packages");
const tools_1 = require("./iflow/tools");
const packages_2 = require("./discover/packages");
const exmaples_1 = require("./iflow/exmaples");
const messages_1 = require("./messages");
const __1 = require("..");
const mappings_1 = require("./mappings");
const examples_1 = require("./mappings/examples");
const docs_1 = require("./docs");
const env_1 = require("./env");
const registerDefaultMiddleware = (server) => {
    server.use(async (next, name, params) => {
        (0, __1.logInfo)(`executing ${name} with ${JSON.stringify(params)}`);
        const startTime = performance.now();
        await next();
        (0, __1.logInfo)(`${name} executed in ${performance.now() - startTime}ms`);
    });
};
const registerAllHandlers = (server) => {
    registerDefaultMiddleware(server);
    (0, packages_1.registerPackageHandlers)(server);
    (0, tools_1.registerIflowHandlers)(server);
    (0, packages_2.registerPackageDiscoverHandler)(server);
    (0, exmaples_1.registerIflowExampleHandler)(server);
    (0, messages_1.registerMessageHandlers)(server);
    (0, mappings_1.registerMappingsHandler)(server);
    (0, examples_1.registerMappingsExampleHandler)(server);
    (0, docs_1.registerDocsHandlers)(server);
    (0, env_1.registerEnvHandlers)(server);
};
exports.registerAllHandlers = registerAllHandlers;
//# sourceMappingURL=index.js.map
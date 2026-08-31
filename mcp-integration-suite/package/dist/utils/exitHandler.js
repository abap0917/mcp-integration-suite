"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDeleteTempOnExit = void 0;
const rimraf_1 = require("rimraf");
const __1 = require("..");
const path_1 = __importDefault(require("path"));
const registerDeleteTempOnExit = () => {
    const deleteTemp = () => {
        (0, rimraf_1.rimrafSync)(path_1.default.join(__1.projPath, 'temp'));
    };
    process.on("exit", (code) => {
        (0, __1.logInfo)('Exit event triggered. Deleting temp folder');
        deleteTemp();
    });
    // just in case some user like using "kill"
    process.on("SIGTERM", (signal) => {
        (0, __1.logInfo)(`Process ${process.pid} received a SIGTERM signal`);
        deleteTemp();
    });
    // catch ctrl-c, so that event 'exit' always works
    process.on("SIGINT", (signal) => {
        (0, __1.logInfo)(`Process ${process.pid} has been interrupted`);
        (0, __1.logInfo)('Exit event triggered. Deleting temp folder');
        deleteTemp();
        process.exit(0);
    });
};
exports.registerDeleteTempOnExit = registerDeleteTempOnExit;
//# sourceMappingURL=exitHandler.js.map
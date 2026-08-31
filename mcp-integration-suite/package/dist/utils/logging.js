"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToErrLog = exports.writeToLog = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const __1 = require("..");
const log_file = fs_1.default.createWriteStream(path_1.default.resolve(__1.projPath, "serverlog.txt"), {
    flags: "a",
    encoding: "utf-8",
    mode: 0o666,
});
const err_log_file = fs_1.default.createWriteStream(path_1.default.resolve(__1.projPath, "errorlog.txt"), {
    flags: "a",
    encoding: "utf-8",
    mode: 0o666,
});
/**
 * Writes a log entry to the log file
 * @param d - The object or message to be logged
 */
const writeToLog = (d) => {
    log_file.write(util_1.default.format(d) + "\n");
};
exports.writeToLog = writeToLog;
/**
 * Writes a log entry to the error log file
 * @param d - The object or message to be logged
 */
const writeToErrLog = (d) => {
    err_log_file.write(util_1.default.format(d) + "\n");
};
exports.writeToErrLog = writeToErrLog;
//# sourceMappingURL=logging.js.map
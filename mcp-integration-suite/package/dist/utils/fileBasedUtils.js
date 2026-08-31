"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchFile = exports.parseFolder = void 0;
const fs_1 = require("fs");
const glob_1 = require("glob");
const path_1 = __importDefault(require("path"));
const __1 = require("..");
const promises_1 = require("fs/promises");
/**
 * Get all files of a folder as one concatinated string for AI readability
 * @param folderPath Path to the folder to parse
 * @returns All files of folder as text in a single string in Format <relative Path>\n---begin-of-file---\n<file content>\n---end-of-file---\n\
 */
const parseFolder = async (folderPath) => {
    const allFiles = await (0, glob_1.glob)(path_1.default.join(folderPath, "**", "*").replace(/\\/g, '/'), { nodir: true });
    let resultString = "";
    for (const file of allFiles) {
        resultString += file + "\n---begin-of-file---\n";
        resultString += await fs_1.promises.readFile(file, "utf-8");
        resultString += "\n---end-of-file---\n\n";
    }
    (0, __1.logInfo)(`Done parsing ${folderPath} Total length is  ${resultString.length}`);
    return resultString;
};
exports.parseFolder = parseFolder;
/**
 * Replace a file in a folder
 * @param basePath Path of the project
 * @param relativePath relativ Path within the project
 * @param content that should be written to the file
 * @returns
 */
const patchFile = async (basePath, relativePath, content, append) => {
    const filePath = path_1.default.join(basePath, relativePath);
    if (append) {
        await (0, promises_1.appendFile)(filePath, content);
    }
    await (0, promises_1.mkdir)(path_1.default.dirname(filePath), { recursive: true });
    await (0, promises_1.writeFile)(filePath, content);
    return;
};
exports.patchFile = patchFile;
//# sourceMappingURL=fileBasedUtils.js.map
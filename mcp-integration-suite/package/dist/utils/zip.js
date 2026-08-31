"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderToZipBuffer = exports.extractToFolder = void 0;
const promises_1 = require("node:fs/promises");
const __1 = require("..");
const adm_zip_1 = __importDefault(require("adm-zip"));
const node_path_1 = __importDefault(require("node:path"));
const rimraf_1 = require("rimraf");
/**
 * Extracts a ZIP buffer to a specified folder
 * @param zipBuf - The ZIP file as a buffer
 * @param id - The unique identifier for the extraction folder
 * @returns The path to the extracted folder
 */
const extractToFolder = async (zipBuf, id) => {
    const iflowPath = node_path_1.default.join(__1.projPath, "temp", id);
    await (0, rimraf_1.rimraf)(iflowPath);
    await (0, promises_1.mkdir)(iflowPath, { recursive: true });
    const zip = new adm_zip_1.default(zipBuf);
    zip.extractAllTo(iflowPath, true);
    return iflowPath;
};
exports.extractToFolder = extractToFolder;
/**
 * Converts a folder to a ZIP buffer
 * @param path - The path to the folder to be zipped
 * @returns A buffer containing the zipped folder
 */
const folderToZipBuffer = async (path) => {
    const zip = new adm_zip_1.default();
    (0, __1.logInfo)(`Adding ${path} to ZIP archive`);
    zip.addLocalFolder(path);
    return zip.toBufferPromise();
};
exports.folderToZipBuffer = folderToZipBuffer;
//# sourceMappingURL=zip.js.map
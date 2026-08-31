"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getiFlowToImage = void 0;
const path_1 = __importDefault(require("path"));
const __1 = require("../../..");
const bpmnLib_1 = require("./bpmnLib");
const glob_1 = require("glob");
const promises_1 = require("fs/promises");
// returns base64 image png
const getiFlowToImage = async (iflowPath) => {
    const iflowXmPath = (await (0, glob_1.glob)(iflowPath.replace(/\\/g, '/') + "/**/*.iflw"))[0];
    if (!iflowXmPath) {
        throw new Error("Could not locate iflow XML");
    }
    const tempPngPath = path_1.default.join(await (0, promises_1.mkdtemp)(path_1.default.join(__1.projPath, "temp", "file")), "output.png");
    await (0, bpmnLib_1.convertAll)([
        {
            input: iflowXmPath,
            outputs: [tempPngPath],
        },
    ], {
        minDimensions: { width: 1200, height: 800 },
        deviceScaleFactor: 2,
    });
    const encodedPngStr = await (0, promises_1.readFile)(tempPngPath, { encoding: 'base64' });
    await (0, promises_1.rm)(tempPngPath);
    return encodedPngStr;
};
exports.getiFlowToImage = getiFlowToImage;
//# sourceMappingURL=index.js.map
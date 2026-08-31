"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPackageDiscoverHandler = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const __1 = require("../..");
const resourceDiscoverPath = path_1.default.resolve(__1.projPath, "./resources/Discover");
const registerPackageDiscoverHandler = (server) => {
    server.registerToolIntegrationSuite("discover-packages", "Get information about Packages from discover center", {}, async () => {
        return {
            content: [
                {
                    type: "text",
                    text: await fs_1.promises.readFile(path_1.default.join(resourceDiscoverPath, "IntegrationPackages.json"), "utf-8"),
                },
            ],
        };
    });
};
exports.registerPackageDiscoverHandler = registerPackageDiscoverHandler;
//# sourceMappingURL=packages.js.map
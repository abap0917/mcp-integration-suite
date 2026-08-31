"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableExamples = void 0;
const path_1 = __importDefault(require("path"));
const __1 = require("../..");
const resourceBasePath = path_1.default.resolve(__1.projPath, "./resources/examples/mappings/");
exports.availableExamples = {
    mm_material_clasification: {
        description: "Complex mapping using Message Mapping + Scripts. It converts to a CLFMAS02. Its business context is SAP ERP material clasification",
        _path: path_1.default.join(resourceBasePath, "mm_material_clasification")
    },
    mm_material_management: {
        description: "Complex mapping using Message Mapping + Scripts. It converts to. It converts to a COND_A01. Its business context is SAP ERP material clasification",
        _path: path_1.default.join(resourceBasePath, "mm_material_management")
    },
    mm_pricing_conditions: {
        description: "Complex mapping using Message Mapping + Scripts. It is used for SAP SD pricing conditions",
        _path: path_1.default.join(resourceBasePath, "mm_pricing_conditions")
    },
    mm_simple_1_to_1: {
        description: "Simple direct mapping between similar structures",
        _path: path_1.default.join(resourceBasePath, "mm_simple_1_to_1")
    }
};
//# sourceMappingURL=examples.js.map
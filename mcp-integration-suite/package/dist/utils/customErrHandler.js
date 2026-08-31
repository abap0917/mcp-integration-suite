"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAxiosError = exports.formatError = void 0;
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
const formatError = (error) => {
    const errReturn = (0, exports.extractAxiosError)(error);
    (0, __1.logError)(errReturn);
    return errReturn;
};
exports.formatError = formatError;
const extractAxiosError = (error) => {
    if (error === null) {
        return {
            type: "text",
            text: "Received a null error! This should never happen. Consider checking server logs",
        };
    }
    try {
        // SAP SDK can return actual axios error in complex structure
        if (axios_1.default.isAxiosError(error) ||
            axios_1.default.isAxiosError(error?.cause) ||
            axios_1.default.isAxiosError(error?.cause?.cause)) {
            const axiosError = (() => {
                if (axios_1.default.isAxiosError(error))
                    return error;
                if (axios_1.default.isAxiosError(error?.cause))
                    return error.cause;
                return error.cause?.cause;
            })();
            const response = axiosError?.response;
            const request = axiosError?.request;
            if (response) {
                //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
                let body = typeof response.data === "string" ||
                    typeof response.data === "object"
                    ? response.data
                    : "undefined or binary";
                if (typeof body === "object" &&
                    body !== null &&
                    "type" in body &&
                    body.type === "Buffer") {
                    body = "undefined or binary";
                }
                return {
                    type: "text",
                    text: JSON.stringify({
                        type: "response with error",
                        statusCode: response.status,
                        statusText: response.statusText,
                        responseBody: body,
                    }),
                };
            }
            else {
                //The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
                return {
                    type: "text",
                    text: JSON.stringify({
                        type: "error creating request",
                        text: { URI: request.path, method: request.method },
                    }),
                };
            }
        }
    }
    catch (error) { }
    return {
        type: "text",
        text: JSON.stringify({ error: error.toString() }),
    };
};
exports.extractAxiosError = extractAxiosError;
//# sourceMappingURL=customErrHandler.js.map
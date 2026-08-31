"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequestToCPI = void 0;
const __1 = require("../..");
const cpi_auth_1 = require("../cpi_auth");
const sendRequestToCPI = async (path, method, contentType, body, headers) => {
    (0, __1.logInfo)(`Executing HTTP request to CPI on ${path} METHOD: ${method}`);
    (0, __1.logInfo)(body);
    (0, __1.logInfo)(headers);
    const authHeader = (await (0, cpi_auth_1.getOAuthTokenCPI)()).http_header;
    const reqHeaders = {
        [authHeader.key]: authHeader.value,
        "Content-Type": contentType,
    };
    headers?.forEach((header) => {
        reqHeaders[header.key] = header.value;
    });
    const fullURL = `${process.env["CPI_BASE_URL"]}${path}`;
    (0, __1.logInfo)(`Executing request against ${fullURL}`);
    const iflowResponse = await fetch(`${process.env["CPI_BASE_URL"]}${path}`, {
        headers: reqHeaders,
        body,
        method,
    });
    return {
        status: iflowResponse.status,
        response: await iflowResponse.text(),
    };
};
exports.sendRequestToCPI = sendRequestToCPI;
//# sourceMappingURL=sendMessageToCPI.js.map
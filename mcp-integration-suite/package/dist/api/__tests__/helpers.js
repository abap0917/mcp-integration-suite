"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePackage = void 0;
const IntegrationContent_1 = require("../../generated/IntegrationContent");
const api_destination_1 = require("../api_destination");
const deletePackage = async (pkgId) => {
    const { integrationPackagesApi } = (0, IntegrationContent_1.integrationContent)();
    await integrationPackagesApi.requestBuilder().delete(pkgId).execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.deletePackage = deletePackage;
//# sourceMappingURL=helpers.js.map
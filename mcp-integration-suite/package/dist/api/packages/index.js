"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPackage = exports.getPackage = exports.getPackages = void 0;
const IntegrationContent_1 = require("../../generated/IntegrationContent");
const api_destination_1 = require("../api_destination"); // Removed .js again
const { integrationPackagesApi } = (0, IntegrationContent_1.integrationContent)();
const getPackages = async () => {
    return integrationPackagesApi
        .requestBuilder()
        .getAll()
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.getPackages = getPackages;
const getPackage = async (id) => {
    return integrationPackagesApi
        .requestBuilder()
        .getByKey(id)
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.getPackage = getPackage;
const createPackage = async (id, name, shortText) => {
    const newPackage = integrationPackagesApi.entityBuilder().fromJson({
        name: name ? name : id,
        id,
        description: shortText ? shortText : "No description",
        shortText: shortText ? shortText : "No description",
    });
    return integrationPackagesApi
        .requestBuilder()
        .create(newPackage)
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.createPackage = createPackage;
//# sourceMappingURL=index.js.map
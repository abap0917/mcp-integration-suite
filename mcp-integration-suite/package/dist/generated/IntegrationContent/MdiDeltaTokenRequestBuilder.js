"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdiDeltaTokenRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MdiDeltaToken_1 = require("./MdiDeltaToken");
/**
 * Request builder class for operations supported on the {@link MdiDeltaToken} entity.
 */
class MdiDeltaTokenRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MdiDeltaToken` entities.
     * @returns A request builder for creating requests to retrieve all `MdiDeltaToken` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MdiDeltaToken` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MdiDeltaToken`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MdiDeltaToken` entity based on its keys.
     * @param operation Key property. See {@link MdiDeltaToken.operation}.
     * @param entity Key property. See {@link MdiDeltaToken.entity}.
     * @param version Key property. See {@link MdiDeltaToken.version}.
     * @returns A request builder for creating requests to retrieve one `MdiDeltaToken` entity based on its keys.
     */
    getByKey(operation, entity, version) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Operation: operation,
            Entity: entity,
            Version: version
        });
    }
    /**
     * Returns a request builder for updating an entity of type `MdiDeltaToken`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MdiDeltaToken`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(operationOrEntity, entity, version) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, operationOrEntity instanceof MdiDeltaToken_1.MdiDeltaToken
            ? operationOrEntity
            : {
                Operation: operationOrEntity,
                Entity: entity,
                Version: version
            });
    }
}
exports.MdiDeltaTokenRequestBuilder = MdiDeltaTokenRequestBuilder;
//# sourceMappingURL=MdiDeltaTokenRequestBuilder.js.map
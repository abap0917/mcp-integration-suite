"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValMapSchemaRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ValMapSchema_1 = require("./ValMapSchema");
/**
 * Request builder class for operations supported on the {@link ValMapSchema} entity.
 */
class ValMapSchemaRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ValMapSchema` entities.
     * @returns A request builder for creating requests to retrieve all `ValMapSchema` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ValMapSchema` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValMapSchema`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ValMapSchema` entity based on its keys.
     * @param srcAgency Key property. See {@link ValMapSchema.srcAgency}.
     * @param srcId Key property. See {@link ValMapSchema.srcId}.
     * @param tgtAgency Key property. See {@link ValMapSchema.tgtAgency}.
     * @param tgtId Key property. See {@link ValMapSchema.tgtId}.
     * @returns A request builder for creating requests to retrieve one `ValMapSchema` entity based on its keys.
     */
    getByKey(srcAgency, srcId, tgtAgency, tgtId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SrcAgency: srcAgency,
            SrcId: srcId,
            TgtAgency: tgtAgency,
            TgtId: tgtId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ValMapSchema`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValMapSchema`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(srcAgencyOrEntity, srcId, tgtAgency, tgtId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, srcAgencyOrEntity instanceof ValMapSchema_1.ValMapSchema
            ? srcAgencyOrEntity
            : {
                SrcAgency: srcAgencyOrEntity,
                SrcId: srcId,
                TgtAgency: tgtAgency,
                TgtId: tgtId
            });
    }
}
exports.ValMapSchemaRequestBuilder = ValMapSchemaRequestBuilder;
//# sourceMappingURL=ValMapSchemaRequestBuilder.js.map
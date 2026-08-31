"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeArtifactErrorInformationsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const RuntimeArtifactErrorInformations_1 = require("./RuntimeArtifactErrorInformations");
/**
 * Request builder class for operations supported on the {@link RuntimeArtifactErrorInformations} entity.
 */
class RuntimeArtifactErrorInformationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `RuntimeArtifactErrorInformations` entities.
     * @returns A request builder for creating requests to retrieve all `RuntimeArtifactErrorInformations` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `RuntimeArtifactErrorInformations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RuntimeArtifactErrorInformations`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `RuntimeArtifactErrorInformations` entity based on its keys.
     * @param id Key property. See {@link RuntimeArtifactErrorInformations.id}.
     * @returns A request builder for creating requests to retrieve one `RuntimeArtifactErrorInformations` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `RuntimeArtifactErrorInformations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RuntimeArtifactErrorInformations`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof RuntimeArtifactErrorInformations_1.RuntimeArtifactErrorInformations
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.RuntimeArtifactErrorInformationsRequestBuilder = RuntimeArtifactErrorInformationsRequestBuilder;
//# sourceMappingURL=RuntimeArtifactErrorInformationsRequestBuilder.js.map
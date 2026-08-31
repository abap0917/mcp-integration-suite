"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildAndDeployStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BuildAndDeployStatus_1 = require("./BuildAndDeployStatus");
/**
 * Request builder class for operations supported on the {@link BuildAndDeployStatus} entity.
 */
class BuildAndDeployStatusRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BuildAndDeployStatus` entities.
     * @returns A request builder for creating requests to retrieve all `BuildAndDeployStatus` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BuildAndDeployStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuildAndDeployStatus`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BuildAndDeployStatus` entity based on its keys.
     * @param taskId Key property. See {@link BuildAndDeployStatus.taskId}.
     * @returns A request builder for creating requests to retrieve one `BuildAndDeployStatus` entity based on its keys.
     */
    getByKey(taskId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { TaskId: taskId });
    }
    /**
     * Returns a request builder for updating an entity of type `BuildAndDeployStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuildAndDeployStatus`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(taskIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, taskIdOrEntity instanceof BuildAndDeployStatus_1.BuildAndDeployStatus
            ? taskIdOrEntity
            : { TaskId: taskIdOrEntity });
    }
}
exports.BuildAndDeployStatusRequestBuilder = BuildAndDeployStatusRequestBuilder;
//# sourceMappingURL=BuildAndDeployStatusRequestBuilder.js.map
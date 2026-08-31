"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunStepsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogRunSteps_1 = require("./MessageProcessingLogRunSteps");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogRunSteps} entity.
 */
class MessageProcessingLogRunStepsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogRunSteps` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogRunSteps` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogRunSteps` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogRunSteps`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogRunSteps` entity based on its keys.
     * @param runId Key property. See {@link MessageProcessingLogRunSteps.runId}.
     * @param childCount Key property. See {@link MessageProcessingLogRunSteps.childCount}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogRunSteps` entity based on its keys.
     */
    getByKey(runId, childCount) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RunId: runId,
            ChildCount: childCount
        });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogRunSteps`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogRunSteps`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(runIdOrEntity, childCount) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, runIdOrEntity instanceof MessageProcessingLogRunSteps_1.MessageProcessingLogRunSteps
            ? runIdOrEntity
            : {
                RunId: runIdOrEntity,
                ChildCount: childCount
            });
    }
}
exports.MessageProcessingLogRunStepsRequestBuilder = MessageProcessingLogRunStepsRequestBuilder;
//# sourceMappingURL=MessageProcessingLogRunStepsRequestBuilder.js.map
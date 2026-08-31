"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunStepPropertiesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogRunStepProperties_1 = require("./MessageProcessingLogRunStepProperties");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogRunStepProperties} entity.
 */
class MessageProcessingLogRunStepPropertiesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogRunStepProperties` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogRunStepProperties` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogRunStepProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogRunStepProperties`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogRunStepProperties` entity based on its keys.
     * @param runId Key property. See {@link MessageProcessingLogRunStepProperties.runId}.
     * @param childCount Key property. See {@link MessageProcessingLogRunStepProperties.childCount}.
     * @param name Key property. See {@link MessageProcessingLogRunStepProperties.name}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogRunStepProperties` entity based on its keys.
     */
    getByKey(runId, childCount, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RunId: runId,
            ChildCount: childCount,
            Name: name
        });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogRunStepProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogRunStepProperties`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(runIdOrEntity, childCount, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, runIdOrEntity instanceof MessageProcessingLogRunStepProperties_1.MessageProcessingLogRunStepProperties
            ? runIdOrEntity
            : {
                RunId: runIdOrEntity,
                ChildCount: childCount,
                Name: name
            });
    }
}
exports.MessageProcessingLogRunStepPropertiesRequestBuilder = MessageProcessingLogRunStepPropertiesRequestBuilder;
//# sourceMappingURL=MessageProcessingLogRunStepPropertiesRequestBuilder.js.map
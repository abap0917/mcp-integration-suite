"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessagePropertiesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TraceMessageProperties_1 = require("./TraceMessageProperties");
/**
 * Request builder class for operations supported on the {@link TraceMessageProperties} entity.
 */
class TraceMessagePropertiesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `TraceMessageProperties` entities.
     * @returns A request builder for creating requests to retrieve all `TraceMessageProperties` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TraceMessageProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TraceMessageProperties`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `TraceMessageProperties` entity based on its keys.
     * @param traceId Key property. See {@link TraceMessageProperties.traceId}.
     * @param name Key property. See {@link TraceMessageProperties.name}.
     * @returns A request builder for creating requests to retrieve one `TraceMessageProperties` entity based on its keys.
     */
    getByKey(traceId, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TraceId: traceId,
            Name: name
        });
    }
    /**
     * Returns a request builder for updating an entity of type `TraceMessageProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TraceMessageProperties`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(traceIdOrEntity, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, traceIdOrEntity instanceof TraceMessageProperties_1.TraceMessageProperties
            ? traceIdOrEntity
            : {
                TraceId: traceIdOrEntity,
                Name: name
            });
    }
}
exports.TraceMessagePropertiesRequestBuilder = TraceMessagePropertiesRequestBuilder;
//# sourceMappingURL=TraceMessagePropertiesRequestBuilder.js.map
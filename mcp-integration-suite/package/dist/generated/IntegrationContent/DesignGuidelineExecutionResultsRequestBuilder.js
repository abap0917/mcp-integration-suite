"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignGuidelineExecutionResultsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DesignGuidelineExecutionResults_1 = require("./DesignGuidelineExecutionResults");
/**
 * Request builder class for operations supported on the {@link DesignGuidelineExecutionResults} entity.
 */
class DesignGuidelineExecutionResultsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `DesignGuidelineExecutionResults` entities.
     * @returns A request builder for creating requests to retrieve all `DesignGuidelineExecutionResults` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DesignGuidelineExecutionResults` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DesignGuidelineExecutionResults`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `DesignGuidelineExecutionResults` entity based on its keys.
     * @param executionId Key property. See {@link DesignGuidelineExecutionResults.executionId}.
     * @returns A request builder for creating requests to retrieve one `DesignGuidelineExecutionResults` entity based on its keys.
     */
    getByKey(executionId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { ExecutionId: executionId });
    }
    /**
     * Returns a request builder for updating an entity of type `DesignGuidelineExecutionResults`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DesignGuidelineExecutionResults`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(executionIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, executionIdOrEntity instanceof DesignGuidelineExecutionResults_1.DesignGuidelineExecutionResults
            ? executionIdOrEntity
            : { ExecutionId: executionIdOrEntity });
    }
}
exports.DesignGuidelineExecutionResultsRequestBuilder = DesignGuidelineExecutionResultsRequestBuilder;
//# sourceMappingURL=DesignGuidelineExecutionResultsRequestBuilder.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = exports.SchedulerField = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SchedulerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SchedulerField extends odata_v2_1.ComplexTypeField {
    _fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
    /**
     * Representation of the {@link Scheduler.triggerType} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    triggerType = this._fieldBuilder.buildEdmTypeField('TriggerType', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.dateType} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateType = this._fieldBuilder.buildEdmTypeField('DateType', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.timeType} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    timeType = this._fieldBuilder.buildEdmTypeField('TimeType', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.date} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.time} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    time = this._fieldBuilder.buildEdmTypeField('Time', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.dayOfMonth} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dayOfMonth = this._fieldBuilder.buildEdmTypeField('DayOfMonth', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.monday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    monday = this._fieldBuilder.buildEdmTypeField('Monday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.tuesday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tuesday = this._fieldBuilder.buildEdmTypeField('Tuesday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.wednesday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wednesday = this._fieldBuilder.buildEdmTypeField('Wednesday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.thursday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thursday = this._fieldBuilder.buildEdmTypeField('Thursday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.friday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    friday = this._fieldBuilder.buildEdmTypeField('Friday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.saturday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    saturday = this._fieldBuilder.buildEdmTypeField('Saturday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.sunday} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sunday = this._fieldBuilder.buildEdmTypeField('Sunday', 'Edm.Boolean', true);
    /**
     * Representation of the {@link Scheduler.onEveryDuration} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    onEveryDuration = this._fieldBuilder.buildEdmTypeField('OnEveryDuration', 'Edm.Int32', true);
    /**
     * Representation of the {@link Scheduler.fromInterval} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromInterval = this._fieldBuilder.buildEdmTypeField('FromInterval', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.toInterval} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toInterval = this._fieldBuilder.buildEdmTypeField('ToInterval', 'Edm.String', true);
    /**
     * Representation of the {@link Scheduler.timeZone} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    timeZone = this._fieldBuilder.buildEdmTypeField('TimeZone', 'Edm.String', true);
    /**
     * Creates an instance of SchedulerField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, Scheduler, fieldOptions);
    }
}
exports.SchedulerField = SchedulerField;
var Scheduler;
(function (Scheduler) {
    /**
     * Metadata information on all properties of the `Scheduler` complex type.
     */
    Scheduler._propertyMetadata = [
        {
            originalName: 'TriggerType',
            name: 'triggerType',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DateType',
            name: 'dateType',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'TimeType',
            name: 'timeType',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Time',
            name: 'time',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DayOfMonth',
            name: 'dayOfMonth',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Monday',
            name: 'monday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Tuesday',
            name: 'tuesday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Wednesday',
            name: 'wednesday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Thursday',
            name: 'thursday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Friday',
            name: 'friday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Saturday',
            name: 'saturday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Sunday',
            name: 'sunday',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'OnEveryDuration',
            name: 'onEveryDuration',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'FromInterval',
            name: 'fromInterval',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'ToInterval',
            name: 'toInterval',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'TimeZone',
            name: 'timeZone',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(Scheduler || (exports.Scheduler = Scheduler = {}));
//# sourceMappingURL=Scheduler.js.map
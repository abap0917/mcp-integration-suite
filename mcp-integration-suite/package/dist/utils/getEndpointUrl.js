"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointUrl = void 0;
const __1 = require("..");
/**
 * Translate internal CPI Protocol names
 */
const cpiProtocolMap = {
    "REST": {
        trailingProtocol: 'https',
        URIProtocol: '/http/',
    },
    "AS2": {
        trailingProtocol: 'https',
        URIProtocol: '/as2/as2/'
    },
    "SOAP": {
        trailingProtocol: 'https',
        URIProtocol: '/cfx/soapapi/'
    }
};
/**
 * Get Endpoint URL for IFLOWs based on ServiceEndpoints entity
 * @param ServiceEndpoints from api
 * @returns string of the actual URL of the endpoint or empty string
 */
const getEndpointUrl = (endpoint) => {
    const endpointIdentifier = endpoint.id.split('=')[1];
    if (!endpointIdentifier || !endpoint.protocol) {
        (0, __1.logInfo)('Could not find endpoint identifier for endpoint object:');
        (0, __1.logInfo)(JSON.stringify(endpoint)); // Log the raw object, remove .toJSON()
        return '';
    }
    const protocolObj = cpiProtocolMap[endpoint.protocol];
    if (!protocolObj) {
        (0, __1.logInfo)('Unsupported Protocol for endpoint object:');
        (0, __1.logInfo)(JSON.stringify(endpoint)); // Log the raw object, remove .toJSON()
        return '';
    }
    // for now only supports https:// 
    return `${process.env['CPI_BASE_URL']}${protocolObj.URIProtocol}${endpointIdentifier}`;
};
exports.getEndpointUrl = getEndpointUrl;
//# sourceMappingURL=getEndpointUrl.js.map
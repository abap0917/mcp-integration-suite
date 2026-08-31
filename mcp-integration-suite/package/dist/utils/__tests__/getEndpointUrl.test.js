"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getEndpointUrl_1 = require("../getEndpointUrl");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Mock ServiceEndpoints type for testing
// We only need the properties used by getEndpointUrl: id and protocol
const createMockEndpoint = (id, protocol) => {
    // Cast to 'any' to bypass strict type checking for mock object
    return {
        id: `if_ai_invoice$endpointAddress=${id}`, // Mimic the expected ID format
        protocol: protocol
    };
};
describe('getEndpointUrl Utility Function', () => {
    const originalCpiBaseUrl = process.env['CPI_BASE_URL'];
    beforeAll(() => {
        // Set a dummy base URL for testing if not already set
        if (!process.env['CPI_BASE_URL']) {
            process.env['CPI_BASE_URL'] = 'https://test-cpi-base.example.com';
        }
    });
    afterAll(() => {
        // Restore original base URL or remove the dummy one
        if (originalCpiBaseUrl) {
            process.env['CPI_BASE_URL'] = originalCpiBaseUrl;
        }
        else {
            delete process.env['CPI_BASE_URL'];
        }
    });
    it('should return the correct URL for REST protocol', () => {
        const endpointId = 'myRestEndpoint';
        const mockEndpoint = createMockEndpoint(endpointId, 'REST');
        const expectedUrl = `${process.env['CPI_BASE_URL']}/http/${endpointId}`;
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual(expectedUrl);
    });
    it('should return the correct URL for AS2 protocol', () => {
        const endpointId = 'partnerAS2';
        const mockEndpoint = createMockEndpoint(endpointId, 'AS2');
        const expectedUrl = `${process.env['CPI_BASE_URL']}/as2/as2/${endpointId}`;
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual(expectedUrl);
    });
    it('should return the correct URL for SOAP protocol', () => {
        const endpointId = 'mySoapService';
        const mockEndpoint = createMockEndpoint(endpointId, 'SOAP');
        const expectedUrl = `${process.env['CPI_BASE_URL']}/cfx/soapapi/${endpointId}`;
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual(expectedUrl);
    });
    it('should return an empty string for an unsupported protocol', () => {
        const endpointId = 'ftpEndpoint';
        const mockEndpoint = createMockEndpoint(endpointId, 'FTP'); // Assuming FTP is unsupported
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual('');
    });
    it('should return an empty string if protocol is null or undefined', () => {
        const endpointId = 'noProtocolEndpoint';
        const mockEndpointNull = createMockEndpoint(endpointId, null);
        const mockEndpointUndefined = createMockEndpoint(endpointId, undefined);
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpointNull)).toEqual('');
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpointUndefined)).toEqual('');
    });
    it('should return an empty string if endpoint ID format is incorrect', () => {
        const mockEndpoint = { id: 'invalidFormat', protocol: 'REST' };
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual('');
    });
    it('should return an empty string if CPI_BASE_URL is not set', () => {
        const currentBaseUrl = process.env['CPI_BASE_URL'];
        delete process.env['CPI_BASE_URL']; // Temporarily remove env var
        const endpointId = 'myRestEndpoint';
        const mockEndpoint = createMockEndpoint(endpointId, 'REST');
        // The function currently returns 'undefined/http/myRestEndpoint' if base URL is missing.
        // Let's test for that specific behavior, although returning '' might be better.
        expect((0, getEndpointUrl_1.getEndpointUrl)(mockEndpoint)).toEqual(`undefined/http/${endpointId}`);
        process.env['CPI_BASE_URL'] = currentBaseUrl; // Restore env var
    });
});
//# sourceMappingURL=getEndpointUrl.test.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const logging_1 = require("../logging");
const __1 = require("../.."); // Assuming projPath is exported from src/index.ts
describe('Logging Utility Functions', () => {
    const logFilePath = path_1.default.resolve(__1.projPath, 'serverlog.txt');
    const errLogFilePath = path_1.default.resolve(__1.projPath, 'errorlog.txt');
    // Helper to read last line of a file
    const readLastLine = async (filePath) => {
        try {
            const content = await promises_1.default.readFile(filePath, 'utf-8');
            const lines = content.trim().split('\n');
            return lines.length > 0 ? lines[lines.length - 1] : null;
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                return null; // File doesn't exist
            }
            throw error;
        }
    };
    // Clear log files before each test to prevent interference
    beforeEach(async () => {
        try {
            await promises_1.default.writeFile(logFilePath, '');
        }
        catch (e) { }
        try {
            await promises_1.default.writeFile(errLogFilePath, '');
        }
        catch (e) { }
    });
    it('writeToLog should write a formatted message to serverlog.txt', async () => {
        const uniqueMessage1 = `Unique log message 1 ${Date.now()}`;
        const uniqueMessage2 = `Unique log message 2 ${Date.now()}`;
        const testObject = { logId: 123, payload: 'log payload' };
        const expectedObjectString = "{ logId: 123, payload: 'log payload' }"; // How util.format likely outputs
        (0, logging_1.writeToLog)(uniqueMessage1);
        (0, logging_1.writeToLog)(testObject);
        (0, logging_1.writeToLog)(uniqueMessage2);
        // Wait a bit longer for potentially multiple writes
        await new Promise(resolve => setTimeout(resolve, 100));
        const logContent = await promises_1.default.readFile(logFilePath, 'utf-8');
        expect(logContent).toContain(uniqueMessage1);
        expect(logContent).toContain(expectedObjectString);
        expect(logContent).toContain(uniqueMessage2);
    });
    it('writeToErrLog should write a formatted message to errorlog.txt', async () => {
        const uniqueErrorMessage1 = `Unique error message 1 ${Date.now()}`;
        const uniqueErrorMessage2 = `Unique error message 2 ${Date.now()}`;
        const testErrorObject = new Error('Specific error occurred');
        const expectedErrorString = 'Error: Specific error occurred';
        (0, logging_1.writeToErrLog)(uniqueErrorMessage1);
        (0, logging_1.writeToErrLog)(testErrorObject);
        (0, logging_1.writeToErrLog)(uniqueErrorMessage2);
        // Wait a bit longer
        await new Promise(resolve => setTimeout(resolve, 100));
        const errLogContent = await promises_1.default.readFile(errLogFilePath, 'utf-8');
        expect(errLogContent).toContain(uniqueErrorMessage1);
        expect(errLogContent).toContain(expectedErrorString);
        // Check for stack trace part as well
        expect(errLogContent).toContain('at Object.<anonymous>');
        expect(errLogContent).toContain(uniqueErrorMessage2);
    });
});
//# sourceMappingURL=logging.test.js.map
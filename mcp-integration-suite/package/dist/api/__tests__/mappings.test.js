"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../mappings/index");
const index_2 = require("../packages/index"); // Need createPackage
const deployment_1 = require("../deployment"); // Need deployment status check
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const helpers_1 = require("./helpers");
// Load environment variables from .env file
dotenv_1.default.config();
describe("Message Mapping Management API", () => {
    // Increase timeout significantly for multiple API calls including deployment waits
    jest.setTimeout(300000); // 5 minutes
    const testPackageIdBase = `jesttestpkgmappings`; // No underscores
    let testPackageId = ""; // Initialize
    const testMappingId = `jesttestmapping${Date.now()}`; // No underscores
    let packageCreated = false;
    let mappingCreated = false;
    let mappingDeployed = false;
    // Check prerequisites and create a dedicated package for these tests
    beforeAll(async () => {
        if (!process.env.API_BASE_URL || (!process.env.API_USER && !process.env.API_OAUTH_CLIENT_ID)) {
            throw new Error("Missing required environment variables for API connection (URL and Auth). Skipping Mapping tests.");
        }
        // Create a unique package for this test run (no underscores)
        testPackageId = testPackageIdBase; // Removed underscore
        try {
            console.log(`Attempting to create test package for mappings: ${testPackageId}`);
            await (0, index_2.createPackage)(testPackageId, `Jest Mapping Test Pkg`, `Temp pkg for Jest Mapping tests`);
            packageCreated = true;
            console.log(`Test package ${testPackageId} created successfully.`);
        }
        catch (error) {
            console.error(`Failed to create test package ${testPackageId}. Mapping tests will likely fail. Error:`, error);
            throw new Error(`Failed to create prerequisite package ${testPackageId}`);
        }
    });
    // Note: No automatic cleanup for the package or mapping. Manual cleanup needed.
    it("should create an empty message mapping", async () => {
        expect(packageCreated).toBe(true); // Ensure package exists
        try {
            await (0, index_1.createMessageMapping)(testPackageId, testMappingId);
            mappingCreated = true;
            // Verify by checking the list
            const mappings = await (0, index_1.getAllMessageMappings)(); // Gets all mappings across all packages
            const found = mappings.some((mapping) => mapping.id === testMappingId && mapping.packageId === testPackageId);
            expect(found).toBe(true);
        }
        catch (error) {
            console.error(`Error during createMessageMapping test for ${testMappingId} in package ${testPackageId}:`, error);
            throw error;
        }
    });
    it("should retrieve all message mappings", async () => {
        expect(mappingCreated).toBe(true); // Ensure the mapping we created exists
        try {
            const mappings = await (0, index_1.getAllMessageMappings)();
            expect(mappings).toBeDefined();
            expect(Array.isArray(mappings)).toBe(true);
            expect(mappings.length).toBeGreaterThanOrEqual(1); // Should contain at least the one we created
            const found = mappings.some((mapping) => mapping.id === testMappingId);
            expect(found).toBe(true);
        }
        catch (error) {
            console.error(`Error during getAllMessageMappings test:`, error);
            throw error;
        }
    });
    it("should download the message mapping folder", async () => {
        expect(mappingCreated).toBe(true);
        let mappingPath;
        try {
            mappingPath = await (0, index_1.getMessageMappingFolder)(testMappingId);
            expect(mappingPath).toBeDefined();
            expect(typeof mappingPath).toBe('string');
            // Check if the directory exists
            const stats = await promises_1.default.stat(mappingPath);
            expect(stats.isDirectory()).toBe(true);
            // Check for expected files (e.g., META-INF)
            await promises_1.default.access(path_1.default.join(mappingPath, 'META-INF', 'MANIFEST.MF'));
        }
        catch (error) {
            console.error(`Error during getMessageMappingFolder test for ${testMappingId}:`, error);
            throw error;
        }
        finally {
            // Clean up the downloaded folder
            if (mappingPath) {
                try {
                    await promises_1.default.rm(mappingPath, { recursive: true, force: true });
                }
                catch (cleanupError) {
                    console.warn(`Could not clean up downloaded mapping folder: ${mappingPath}`, cleanupError);
                }
            }
        }
    });
    it("should update a message mapping with new file content", async () => {
        expect(mappingCreated).toBe(true);
        // Mappings usually have .mmap, .xsd, .grv files. Let's add a dummy XSD.
        const testFilePath = "src/main/resources/xsd/testSchema.xsd";
        const testFileContent = `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:element name="TestRoot_${Date.now()}" type="xs:string"/></xs:schema>`;
        try {
            const updateResult = await (0, index_1.updateMessageMapping)(testMappingId, [{
                    filepath: testFilePath,
                    content: testFileContent,
                    appendMode: false
                }]);
            expect(updateResult).toBeDefined();
            expect(updateResult.messageMappingUpdate).toBeDefined();
            expect(updateResult.messageMappingUpdate.status).toBe(200); // Assuming 200 means success
            // Verify update by downloading again and checking content
            const mappingPath = await (0, index_1.getMessageMappingFolder)(testMappingId);
            const schemaPath = path_1.default.join(mappingPath, testFilePath);
            const actualContent = await promises_1.default.readFile(schemaPath, 'utf-8');
            expect(actualContent).toEqual(testFileContent);
            // Clean up downloaded folder
            await promises_1.default.rm(mappingPath, { recursive: true, force: true });
        }
        catch (error) {
            console.error(`Error during updateMessageMapping test for ${testMappingId}:`, error);
            // Clean up potentially downloaded folder on error
            try {
                const mappingPath = path_1.default.join(process.cwd(), 'temp', testMappingId); // Assuming temp folder structure
                await promises_1.default.rm(mappingPath, { recursive: true, force: true });
            }
            catch (cleanupError) { }
            throw error;
        }
    });
    // Skip deployment test as empty mapping is invalid and will fail deployment
    it.skip("should attempt to deploy a message mapping and check status", async () => {
        expect(mappingCreated).toBe(true); // Ensure mapping exists
        try {
            // Note: deployMapping might not return a usable taskId based on code comments
            const taskId = await (0, index_1.deployMapping)(testMappingId);
            console.log(`Attempted deployment for mapping ${testMappingId}. Task ID (if returned): ${taskId}`);
            // Due to the potential issue with taskId return, we might not be able to wait reliably.
            // We'll attempt to wait if a taskId is returned, otherwise just check error status after a delay.
            let finalStatus = "UNKNOWN";
            if (taskId && typeof taskId === 'string' && taskId.length > 0) {
                console.log(`Waiting for deployment status using Task ID: ${taskId}...`);
                finalStatus = await (0, deployment_1.waitAndGetDeployStatus)(taskId); // This might fail if taskId isn't valid for status check
                console.log(`Deployment status for mapping ${testMappingId} (via Task ID): ${finalStatus}`);
            }
            else {
                console.warn(`No valid Task ID returned for mapping ${testMappingId} deployment. Waiting 30s before checking error status...`);
                await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds
                // Check error status directly as a fallback
                const errorReasonCheck = await (0, deployment_1.getDeploymentErrorReason)(testMappingId);
                // Check if errorReasonCheck is null, empty string, or an object indicating no error (adjust based on actual API behavior if needed)
                if (errorReasonCheck === null || errorReasonCheck === "" || (typeof errorReasonCheck === 'object' && !Object.keys(errorReasonCheck).length)) {
                    finalStatus = "SUCCESS"; // Assume success if no significant error reported after delay
                    console.log(`Deployment status for mapping ${testMappingId} (via error check): SUCCESS (assumed)`);
                }
                else {
                    finalStatus = "FAILED"; // Assume failure if error reported
                    const reasonString = typeof errorReasonCheck === 'object' ? JSON.stringify(errorReasonCheck) : errorReasonCheck;
                    console.error(`Deployment status for mapping ${testMappingId} (via error check): FAILED. Reason: ${reasonString}`);
                    throw new Error(`Deployment failed (checked via error status). Reason: ${reasonString}`);
                }
            }
            if (finalStatus !== "SUCCESS") {
                const errorReason = await (0, deployment_1.getDeploymentErrorReason)(testMappingId);
                console.error(`Deployment failed for mapping ${testMappingId}. Status: ${finalStatus}. Reason: ${errorReason}`);
                throw new Error(`Deployment failed with status ${finalStatus}. Reason: ${errorReason}`);
            }
            expect(finalStatus).toEqual("SUCCESS");
            mappingDeployed = true;
        }
        catch (error) {
            console.error(`Error during deployMapping/status check test for ${testMappingId}:`, error);
            // Attempt to get error reason even if wait failed/skipped
            try {
                const errorReason = await (0, deployment_1.getDeploymentErrorReason)(testMappingId);
                console.error(`Deployment error reason for mapping ${testMappingId}: ${errorReason}`);
            }
            catch (reasonError) {
                console.error("Could not retrieve deployment error reason.", reasonError);
            }
            throw error;
        }
    });
    it("should save the message mapping as a new version", async () => {
        expect(mappingCreated).toBe(true);
        try {
            await (0, index_1.saveAsNewVersion)(testMappingId);
            // Verification would ideally involve getting the mapping details again and checking the version.
            // Assume success if no error.
        }
        catch (error) {
            console.error(`Error during saveMappingAsNewVersion test for ${testMappingId}:`, error);
            throw error;
        }
    });
    it("should get the message mapping content as a string", async () => {
        expect(mappingCreated).toBe(true);
        try {
            const contentString = await (0, index_1.getMessageMappingContentString)(testMappingId);
            expect(contentString).toBeDefined();
            expect(typeof contentString).toBe('string');
            // Check for some expected content
            expect(contentString).toContain("testSchema.xsd");
            expect(contentString).toContain("TestRoot_"); // From the dummy XSD content
            expect(contentString).toContain("MANIFEST.MF");
        }
        catch (error) {
            console.error(`Error during getMessageMappingContentString test for ${testMappingId}:`, error);
            throw error;
        }
    });
    afterAll(async () => {
        await (0, helpers_1.deletePackage)(testPackageId);
    });
});
//# sourceMappingURL=mappings.test.js.map
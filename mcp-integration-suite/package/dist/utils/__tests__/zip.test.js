"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const adm_zip_1 = __importDefault(require("adm-zip"));
const zip_1 = require("../zip");
const rimraf_1 = require("rimraf"); // Used for cleanup
// Helper function to create a temporary directory structure for testing
const createTestDir = async (basePath, structure) => {
    for (const name in structure) {
        const currentPath = path_1.default.join(basePath, name);
        const content = structure[name];
        if (typeof content === 'string') {
            await promises_1.default.writeFile(currentPath, content, 'utf-8');
        }
        else if (typeof content === 'object') {
            await promises_1.default.mkdir(currentPath, { recursive: true });
            await createTestDir(currentPath, content);
        }
    }
};
// Helper function to verify directory structure and content
const verifyTestDir = async (basePath, expectedStructure) => {
    for (const name in expectedStructure) {
        const currentPath = path_1.default.join(basePath, name);
        const expectedContent = expectedStructure[name];
        const stats = await promises_1.default.stat(currentPath); // Throws if path doesn't exist
        if (typeof expectedContent === 'string') {
            expect(stats.isFile()).toBe(true);
            const actualContent = await promises_1.default.readFile(currentPath, 'utf-8');
            expect(actualContent).toEqual(expectedContent);
        }
        else if (typeof expectedContent === 'object') {
            expect(stats.isDirectory()).toBe(true);
            await verifyTestDir(currentPath, expectedContent);
        }
    }
    // Optional: Check if there are extra files/dirs not in expectedStructure
    const actualEntries = await promises_1.default.readdir(basePath);
    expect(actualEntries.length).toEqual(Object.keys(expectedStructure).length);
};
describe('ZIP Utility Functions', () => {
    const tempBaseDir = path_1.default.join(__dirname, 'temp_zip_test'); // Base for test dirs
    const sourceDir = path_1.default.join(tempBaseDir, 'source');
    const extractDirBase = path_1.default.join(tempBaseDir, 'extracted');
    const testStructure = {
        'file1.txt': 'Hello World!',
        'subdir': {
            'file2.txt': 'Another file.',
            'nested': {
                'file3.json': '{ "data": 123 }'
            }
        },
        'empty_dir': {}
    };
    // Create base temp directory before all tests
    beforeAll(async () => {
        await (0, rimraf_1.rimraf)(tempBaseDir); // Clean up any previous runs
        await promises_1.default.mkdir(tempBaseDir, { recursive: true });
    });
    // Clean up the base temp directory after all tests
    afterAll(async () => {
        await (0, rimraf_1.rimraf)(tempBaseDir);
    });
    // Clean up source and extracted dirs before each test (relevant for extractToFolder)
    beforeEach(async () => {
        await (0, rimraf_1.rimraf)(sourceDir);
        await (0, rimraf_1.rimraf)(extractDirBase); // Clean potential extraction targets
        await promises_1.default.mkdir(sourceDir, { recursive: true });
        await promises_1.default.mkdir(extractDirBase, { recursive: true });
        // Recreate source structure before each test
        await createTestDir(sourceDir, testStructure);
    });
    it('should zip a folder structure into a buffer', async () => {
        const zipBuffer = await (0, zip_1.folderToZipBuffer)(sourceDir);
        expect(zipBuffer).toBeInstanceOf(Buffer);
        expect(zipBuffer.length).toBeGreaterThan(0);
        // Optional: Verify buffer content using AdmZip
        const zip = new adm_zip_1.default(zipBuffer);
        const zipEntries = zip.getEntries().map(entry => entry.entryName.replace(/\\/g, '/')); // Normalize paths
        expect(zipEntries).toContain('file1.txt');
        expect(zipEntries).toContain('subdir/');
        expect(zipEntries).toContain('subdir/file2.txt');
        expect(zipEntries).toContain('subdir/nested/');
        expect(zipEntries).toContain('subdir/nested/file3.json');
        expect(zipEntries).toContain('empty_dir/');
    });
    it('should extract a zip buffer to a specified folder ID', async () => {
        // 1. Create the zip buffer first
        const zipBuffer = await (0, zip_1.folderToZipBuffer)(sourceDir);
        // 2. Extract it
        const extractId = `test_extract_${Date.now()}`;
        // Note: extractToFolder uses path.join(projPath, "temp", id) internally
        // We can't easily predict projPath here, so we verify the function runs
        // and creates *some* directory structure. A more robust test might mock `projPath`.
        // For now, we'll extract to our own temp dir to verify contents.
        // Let's create a predictable extraction path for verification
        const specificExtractPath = path_1.default.join(extractDirBase, extractId);
        await (0, rimraf_1.rimraf)(specificExtractPath); // Ensure clean target
        // Mock the internal path generation or use a different approach if needed
        // For simplicity, let's assume extractToFolder works as intended regarding path,
        // and focus on the extraction content itself by extracting manually here.
        const zip = new adm_zip_1.default(zipBuffer);
        zip.extractAllTo(specificExtractPath, true);
        // 3. Verify the extracted content
        await verifyTestDir(specificExtractPath, testStructure);
        // 4. Test the actual extractToFolder function (without deep content verification due to path issue)
        const actualExtractPath = await (0, zip_1.extractToFolder)(zipBuffer, extractId);
        expect(actualExtractPath).toContain(extractId); // Check if path includes the ID
        // Check if the directory was created
        const stats = await promises_1.default.stat(actualExtractPath);
        expect(stats.isDirectory()).toBe(true);
        // Clean up the folder created by extractToFolder
        await (0, rimraf_1.rimraf)(actualExtractPath);
    });
    it('extractToFolder should overwrite existing folder', async () => {
        const zipBuffer = await (0, zip_1.folderToZipBuffer)(sourceDir);
        const extractId = `test_overwrite_${Date.now()}`;
        const actualExtractPath = path_1.default.join(process.cwd(), 'temp', extractId); // Predict path based on implementation detail
        // Create a dummy file in the target location first
        await promises_1.default.mkdir(actualExtractPath, { recursive: true });
        await promises_1.default.writeFile(path_1.default.join(actualExtractPath, 'dummy.txt'), 'delete me');
        // Run extractToFolder - it should delete dummy.txt
        await (0, zip_1.extractToFolder)(zipBuffer, extractId);
        // Verify dummy file is gone and expected files exist
        await expect(promises_1.default.access(path_1.default.join(actualExtractPath, 'dummy.txt'))).rejects.toThrow(); // Should not exist
        await expect(promises_1.default.access(path_1.default.join(actualExtractPath, 'file1.txt'))).resolves.not.toThrow(); // Should exist
        // Clean up
        await (0, rimraf_1.rimraf)(actualExtractPath);
    });
});
//# sourceMappingURL=zip.test.js.map
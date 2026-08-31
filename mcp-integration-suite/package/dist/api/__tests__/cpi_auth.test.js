"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpi_auth_1 = require("../cpi_auth");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
describe("CPI Authentication API", () => {
    // Increase timeout for network requests
    jest.setTimeout(30000); // 30 seconds
    it("should retrieve a valid OAuth token for CPI", async () => {
        // Check if necessary environment variables are set
        if (!process.env.CPI_OAUTH_CLIENT_ID || !process.env.CPI_OAUTH_CLIENT_SECRET || !process.env.CPI_OAUTH_TOKEN_URL) {
            console.warn("Skipping CPI OAuth test: Required environment variables (CPI_OAUTH_CLIENT_ID, CPI_OAUTH_CLIENT_SECRET, CPI_OAUTH_TOKEN_URL) are not set.");
            return; // Skip test if env vars are missing
        }
        try {
            const token = await (0, cpi_auth_1.getOAuthTokenCPI)();
            // Basic structure validation
            expect(token).toBeDefined();
            expect(token.value).toBeDefined();
            expect(typeof token.value).toBe("string");
            expect(token.value.length).toBeGreaterThan(0);
            expect(token.type).toBeDefined();
            expect(typeof token.type).toBe("string");
            expect(token.expiresIn).toBeDefined();
            expect(typeof token.expiresIn).toBe("number");
            expect(token.http_header).toBeDefined();
            expect(token.http_header.key).toEqual("Authorization");
            expect(token.http_header.value).toContain("Bearer ");
            expect(token.error).toBeNull();
            // Test caching: Call again and check if it returns quickly (though this is hard to assert precisely without mocking time)
            // A simple check is to ensure it doesn't throw an error on the second call.
            const cachedToken = await (0, cpi_auth_1.getOAuthTokenCPI)();
            expect(cachedToken).toBeDefined();
            expect(cachedToken.value).toEqual(token.value); // Should be the same token from cache
        }
        catch (error) {
            // Log the error for debugging but fail the test
            console.error("Error during getOAuthTokenCPI test:", error);
            throw error; // Re-throw to fail the test
        }
    });
});
//# sourceMappingURL=cpi_auth.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDestination = exports.getOAuthToken = exports.resetTokenCache = void 0;
const __1 = require("..");
// Token cache
let tokenCache = null;
/**
 * Reset the cached OAuth token.
 * Called by the environment-switch tool so a token obtained for one CPI
 * tenant is never reused after switching to another tenant.
 */
const resetTokenCache = () => {
    tokenCache = null;
};
exports.resetTokenCache = resetTokenCache;
const getOAuthToken = async () => {
    // Check if token is expired
    const now = Date.now();
    if (tokenCache && tokenCache.expiresAt > now + 5 * 60 * 1000) {
        return tokenCache.token;
    }
    // Add check for token URL existence
    if (!process.env.API_OAUTH_TOKEN_URL) {
        throw new Error("API_OAUTH_TOKEN_URL environment variable is not set.");
    }
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.API_OAUTH_CLIENT_ID);
    params.append("client_secret", process.env.API_OAUTH_CLIENT_SECRET);
    const response = await fetch(process.env.API_OAUTH_TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
    });
    (0, __1.logInfo)("Fetched token");
    (0, __1.logInfo)(response.status);
    if (response.status !== 200) {
        throw new Error(`Error getting OAuth token: ${response.status} ${response.statusText}`);
    }
    try {
        const data = await response.json();
        const token = {
            value: data.access_token,
            type: data.token_type,
            expiresIn: data.expires_in,
            http_header: {
                key: "Authorization",
                value: `Bearer ${data.access_token}`,
            },
            error: null,
        };
        tokenCache = {
            token,
            expiresAt: now + data.expires_in * 1000,
        };
        return token;
    }
    catch (error) {
        (0, __1.logError)(JSON.stringify(error));
        throw new Error("Invalid response from OAuth authentication URL. Please consider checking your credentials/endpoints");
    }
};
exports.getOAuthToken = getOAuthToken;
const isOAuthPresent = () => process.env.API_OAUTH_CLIENT_ID &&
    process.env.API_OAUTH_CLIENT_SECRET &&
    process.env.API_OAUTH_TOKEN_URL
    ? true
    : false;
const isBasicCredPresent = () => process.env.API_USER && process.env.API_PASS ? true : false;
/**
 * Get the API Destination based on .env file
 * @returns
 */
const getCurrentDestination = async () => {
    if (!process.env.API_BASE_URL) {
        throw new Error("No API Url provided in project .env file");
    }
    // check if either API basic credentials or oauth client-credentials is present in full
    if (!isBasicCredPresent() && !isOAuthPresent()) {
        throw new Error("No Authentication method provided in project .env file");
    }
    if (isOAuthPresent())
        return getOAuthConfig();
    if (isBasicCredPresent())
        return getBasicAuthConfig();
    throw new Error("Error setting up Authentication. Please check .env");
};
exports.getCurrentDestination = getCurrentDestination;
const getOAuthConfig = async () => {
    return {
        authentication: "OAuth2ClientCredentials",
        isTrustingAllCertificates: false,
        url: process.env.API_BASE_URL,
        authTokens: [await (0, exports.getOAuthToken)()],
    };
};
const getBasicAuthConfig = async () => {
    return {
        authentication: "BasicAuthentication",
        username: process.env.API_USER,
        password: process.env.API_PASS,
        isTrustingAllCertificates: false,
        url: process.env.API_BASE_URL,
    };
};
//# sourceMappingURL=api_destination.js.map
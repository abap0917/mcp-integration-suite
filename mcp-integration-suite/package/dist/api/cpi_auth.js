"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOAuthTokenCPI = exports.resetTokenCacheCPI = void 0;
const __1 = require("..");
let tokenCache = null;
/**
 * Reset the cached CPI runtime OAuth token.
 * Called by the environment-switch tool so a token obtained for one CPI
 * tenant is never reused after switching to another tenant.
 */
const resetTokenCacheCPI = () => {
    tokenCache = null;
};
exports.resetTokenCacheCPI = resetTokenCacheCPI;
/**
 * Get OAuth token with caching functionality
 * TODO: add CSRF support
 * @returns OAuth2 Token in SAP SDK compatible format
 */
const getOAuthTokenCPI = async () => {
    // Check if token is expired
    const now = Date.now();
    if (tokenCache && tokenCache.expiresAt > now + 5 * 60 * 1000) {
        return tokenCache.token;
    }
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.CPI_OAUTH_CLIENT_ID);
    params.append("client_secret", process.env.CPI_OAUTH_CLIENT_SECRET);
    const response = await fetch(process.env.CPI_OAUTH_TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
    });
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
exports.getOAuthTokenCPI = getOAuthTokenCPI;
//# sourceMappingURL=cpi_auth.js.map
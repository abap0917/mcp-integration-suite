"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McpServerWithMiddleware = exports.MiddlewareManager = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
class MiddlewareManager {
    middlewares = [];
    use(middleware) {
        this.middlewares.push(middleware);
    }
    async execute(name, params) {
        const executeMiddleware = async (index) => {
            if (index >= this.middlewares.length) {
                return;
            }
            const middleware = this.middlewares[index];
            await middleware(() => executeMiddleware(index + 1), name, params);
        };
        await executeMiddleware(0);
    }
}
exports.MiddlewareManager = MiddlewareManager;
/**
 * Custom Middleware Server which extends McpServer by a middleware functionality
 * This is useful for logging atm
 */
class McpServerWithMiddleware extends mcp_js_1.McpServer {
    middlewareManager;
    constructor(serverInfo, options) {
        super(serverInfo, options);
        this.middlewareManager = new MiddlewareManager();
    }
    use(middleware) {
        this.middlewareManager.use(middleware);
    }
    /**
     * wrapper function for server.tool() to have middleware functionalities
     */
    registerToolIntegrationSuite(name, description, params, handler) {
        const wrappedHandler = async (args, extra) => {
            await this.middlewareManager.execute(name, params);
            return handler(args, extra);
        };
        return this.registerTool(name, { description, inputSchema: params }, wrappedHandler);
    }
}
exports.McpServerWithMiddleware = McpServerWithMiddleware;
//# sourceMappingURL=middleware.js.map
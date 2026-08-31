"use strict";
// yoink from https://github.com/bpmn-io/bpmn-to-image
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertAll = convertAll;
const puppeteer = __importStar(require("puppeteer"));
const fs = __importStar(require("fs"));
const path_1 = __importStar(require("path"));
const fs_1 = require("fs");
const __1 = require("../../..");
async function printDiagram(page, options) {
    const { input, outputs, minDimensions, footer, title = true, deviceScaleFactor } = options;
    const diagramXML = (0, fs_1.readFileSync)(input, 'utf8');
    const diagramTitle = title === false ? false : (typeof title === 'string' && title.length ? title : (0, path_1.basename)(input));
    await page.goto(`file://${path_1.default.join(__1.projPath, 'resources', 'Diagram', 'skeleton.html')}`);
    const desiredViewport = await page.evaluate(async function (diagramXML, options) {
        const { ...openOptions } = options;
        // These functions are defined in skeleton.html
        function openDiagram(xml, options) { return window.openDiagram(xml, options); }
        function resize() { window.resize(); }
        function toSVG() { return window.toSVG(); }
        // returns desired viewport
        return openDiagram(diagramXML, openOptions);
    }, diagramXML, {
        minDimensions,
        title: diagramTitle,
        footer
    });
    page.setViewport({
        width: Math.round(desiredViewport.width),
        height: Math.round(desiredViewport.height),
        deviceScaleFactor: deviceScaleFactor || 1
    });
    await page.evaluate(() => {
        // Function is defined in skeleton.html
        window.resize();
    });
    for (const output of outputs) {
        if (output.endsWith('.pdf')) {
            await page.pdf({
                path: output,
                width: desiredViewport.width,
                height: desiredViewport.diagramHeight
            });
        }
        else if (output.endsWith('.png')) {
            await page.screenshot({
                path: `${output}.png`,
                clip: {
                    x: 0,
                    y: 0,
                    width: desiredViewport.width,
                    height: desiredViewport.diagramHeight
                }
            });
        }
        else if (output.endsWith('.svg')) {
            const svg = await page.evaluate(() => {
                // Function is defined in skeleton.html
                return window.toSVG();
            });
            fs.writeFileSync(output, svg, 'utf8');
        }
        else {
            console.error(`Unknown output file format: ${output}`);
        }
    }
}
async function withPage(fn) {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: 'shell'
        });
        await fn(await browser.newPage());
    }
    finally {
        if (browser) {
            await browser.close();
        }
    }
}
async function convertAll(conversions, options = {}) {
    const { minDimensions, footer, title, deviceScaleFactor } = options;
    await withPage(async function (page) {
        for (const conversion of conversions) {
            const { input, outputs } = conversion;
            await printDiagram(page, {
                input,
                outputs,
                minDimensions,
                title,
                footer,
                deviceScaleFactor
            });
        }
    });
}
//# sourceMappingURL=bpmnLib.js.map
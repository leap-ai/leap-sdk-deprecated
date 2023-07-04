"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const http_1 = __importDefault(require("http"));
const makeRequest = ({ apiConfig, endpointUrl, postData, }) => {
    const options = {
        hostname: apiConfig.hostname,
        path: apiConfig.basePath + endpointUrl,
        method: "GET",
        port: apiConfig.port,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiConfig.apiKey}`,
        },
    };
    return new Promise((resolve, reject) => {
        const req = http_1.default.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                console.log({ data, res });
                resolve(JSON.parse(data));
            });
        });
        req.on("error", (error) => {
            reject(error);
        });
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
};
exports.makeRequest = makeRequest;

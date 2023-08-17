"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapEndpoints = void 0;
const cross_fetch_1 = require("cross-fetch");
let API_HOST = "https://api.tryleap.ai";
const API_BASE_PATH = "/api";
if (process.env.LEAP_SDK_DEV_HOST) {
    API_HOST = process.env.LEAP_SDK_DEV_HOST;
}
class Endpoint {
    constructor({ urlTemplate, method, version = 1, }) {
        this.urlTemplate = urlTemplate;
        this.method = method;
        this.version = new Number(version).toString();
    }
    getUrl(params) {
        const urlBase = `${API_HOST}${API_BASE_PATH}${"/v" + this.version}`;
        if (!params) {
            return `${urlBase}${this.urlTemplate}`;
        }
        let url = this.urlTemplate;
        for (const [key, value] of Object.entries(params)) {
            url = url.replace(`{${key}}`, value);
        }
        return `${urlBase}${url}`;
    }
    fetch({ apiKey, pathParams, body, isMultiPart, }) {
        const headers = {
            Authorization: `Bearer ${apiKey.trim()}`,
        };
        // Set headers unless multipart
        if (!isMultiPart) {
            headers["Content-Type"] = "application/json";
        }
        return (0, cross_fetch_1.fetch)(this.getUrl(pathParams), {
            method: this.method,
            body,
            headers,
        });
    }
}
exports.LeapEndpoints = {
    listModels: new Endpoint({
        urlTemplate: `/images/models`,
        method: `GET`,
    }),
    trainModel: new Endpoint({
        urlTemplate: `/images/models`,
        version: 2,
        method: `POST`,
    }),
    getModel: new Endpoint({
        urlTemplate: `/images/models/{modelId}`,
        method: `GET`,
    }),
    deleteModel: new Endpoint({
        urlTemplate: `/images/models/{modelId}`,
        method: `DELETE`,
    }),
    /**
     * INFERENCES
     */
    listInferenceJobs: new Endpoint({
        urlTemplate: `/images/models/{modelId}/inferences`,
        method: `GET`,
    }),
    deleteInference: new Endpoint({
        urlTemplate: `/images/models/{modelId}/inferences/{inferenceId}`,
        method: `DELETE`,
    }),
    createInferenceJob: new Endpoint({
        urlTemplate: `/images/models/{modelId}/inferences`,
        method: `POST`,
    }),
    getInferenceJob: new Endpoint({
        urlTemplate: `/images/models/{modelId}/inferences/{inferenceId}`,
        method: `GET`,
    }),
    /**
     * MUSIC
     */
    createMusicInferenceJob: new Endpoint({
        urlTemplate: `/music`,
        method: `POST`,
    }),
    getMusicInferenceJobs: new Endpoint({
        urlTemplate: `/music`,
        method: `GET`,
    }),
    getSingleMusicInferenceJob: new Endpoint({
        urlTemplate: `/music/{inferenceId}`,
        method: `GET`,
    }),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapEndpoints = void 0;
const cross_fetch_1 = require("cross-fetch");
let API_HOST = "https://api.tryleap.ai";
const API_BASE_PATH = "/api/v1";
if (process.env.LEAP_SDK_DEV_HOST) {
    API_HOST = process.env.LEAP_SDK_DEV_HOST;
}
console.log({ API_HOST });
class Endpoint {
    constructor({ urlTemplate, method, }) {
        this.urlTemplate = urlTemplate;
        this.method = method;
    }
    getUrl(params) {
        if (!params) {
            return `${API_HOST}${API_BASE_PATH}${this.urlTemplate}`;
        }
        let url = this.urlTemplate;
        for (const [key, value] of Object.entries(params)) {
            url = url.replace(`{${key}}`, value);
        }
        return `${API_HOST}${API_BASE_PATH}${url}`;
    }
    fetch({ apiKey, pathParams, body, isMultiPart, }) {
        console.log();
        const headers = {
            Authorization: `Bearer ${apiKey.trim()}`,
        };
        // Set headers unless multipart
        if (!isMultiPart) {
            headers["Content-Type"] = "application/json";
        }
        console.log(this.getUrl(pathParams));
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
    createModel: new Endpoint({
        urlTemplate: `/images/models`,
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
    getModelVersion: new Endpoint({
        urlTemplate: `/images/models/{modelId}/versions/{versionId}`,
        method: `GET`,
    }),
    listModelVersions: new Endpoint({
        urlTemplate: `/images/models/{modelId}/versions`,
        method: `GET`,
    }),
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
    queueModelVersionTraining: new Endpoint({
        urlTemplate: `/images/models/{modelId}/queue`,
        method: `POST`,
    }),
    listModelSamples: new Endpoint({
        urlTemplate: `/images/models/{modelId}/samples`,
        method: `GET`,
    }),
    getSingleSample: new Endpoint({
        urlTemplate: `/images/models/{modelId}/samples/{sampleId}`,
        method: `GET`,
    }),
    uploadSamples: new Endpoint({
        urlTemplate: `/images/models/{modelId}/samples/`,
        method: `POST`,
    }),
    uploadSamplesViaUrl: new Endpoint({
        urlTemplate: `/images/models/{modelId}/samples/url`,
        method: `POST`,
    }),
    archiveSample: new Endpoint({
        urlTemplate: `/images/models/{modelId}/samples/{sampleId}/archive`,
        method: `POST`,
    }),
    createEditJob: new Endpoint({
        urlTemplate: `/images/edit`,
        method: `POST`,
    }),
    getEditJob: new Endpoint({
        urlTemplate: `/images/edit/{editId}`,
        method: `GET`,
    }),
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
// LeapEndpoints.listModels.getUrl();
// LeapEndpoints.archiveSample.getUrl({
//   modelId: "123",
//   sampleId: "456",
// });
// LeapEndpoints.getEditImage.getUrl({
//   editId: "123",
// });
// LeapEndpoints.getEditImage.fetch({
//   apiKey: "123",
//   pathParams: {
//     editId: "123",
//   },
//   body: {},
// });

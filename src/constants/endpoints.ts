import { fetch } from "cross-fetch";

const API_HOST = "https://api.tryleap.ai";
const API_BASE_PATH = "/api/v1";

class Endpoint<T = undefined> {
  private urlTemplate: string;
  public method: "POST" | "GET" | "PUT" | "DELETE";

  constructor({
    urlTemplate,
    method,
  }: {
    urlTemplate: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
  }) {
    this.urlTemplate = urlTemplate;
    this.method = method;
  }

  getUrl(params?: T) {
    if (!params) {
      return `${API_HOST}${API_BASE_PATH}${this.urlTemplate}`;
    }
    let url = this.urlTemplate;
    for (const [key, value] of Object.entries(params)) {
      url = url.replace(`{${key}}`, value as string);
    }
    return `${API_HOST}${API_BASE_PATH}${url}`;
  }

  fetch({
    apiKey,
    pathParams,
    body,
    isMultiPart,
  }: {
    apiKey: string;
    pathParams?: T;
    body?: any;
    isMultiPart?: boolean;
  }) {
    const headers: {
      [key: string]: string;
    } = {
      Authorization: `Bearer ${apiKey}`,
    };

    // Set headers unless multipart
    if (!isMultiPart) {
      headers["Content-Type"] = "application/json";
    }

    return fetch(this.getUrl(pathParams), {
      method: this.method,
      body,
      headers,
    });
  }
}

export const LeapEndpoints = {
  listModels: new Endpoint({
    urlTemplate: `/images/models`,
    method: `GET`,
  }),

  createModel: new Endpoint({
    urlTemplate: `/images/models`,
    method: `POST`,
  }),

  getModel: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}`,
    method: `GET`,
  }),
  deleteModel: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}`,
    method: `DELETE`,
  }),
  getModelVersion: new Endpoint<{
    modelId: string;
    versionId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/versions/{versionId}`,
    method: `GET`,
  }),

  listModelVersions: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/versions`,
    method: `GET`,
  }),

  listInferenceJobs: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/inferences`,
    method: `GET`,
  }),

  deleteInference: new Endpoint<{
    modelId: string;
    inferenceId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/inferences/{inferenceId}`,
    method: `DELETE`,
  }),

  createInferenceJob: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/inferences`,
    method: `POST`,
  }),

  getInferenceJob: new Endpoint<{
    modelId: string;
    inferenceId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/inferences/{inferenceId}`,
    method: `GET`,
  }),
  queueModelVersionTraining: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/queue`,
    method: `POST`,
  }),

  listModelSamples: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/samples`,
    method: `GET`,
  }),

  getSingleSample: new Endpoint<{
    modelId: string;
    sampleId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/samples/{sampleId}`,
    method: `GET`,
  }),

  uploadSamples: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/samples/`,
    method: `POST`,
  }),

  uploadSamplesViaUrl: new Endpoint<{
    modelId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/samples/url`,
    method: `POST`,
  }),

  archiveSample: new Endpoint<{
    modelId: string;
    sampleId: string;
  }>({
    urlTemplate: `/images/models/{modelId}/samples/{sampleId}/archive`,
    method: `POST`,
  }),

  createEditJob: new Endpoint({
    urlTemplate: `/images/edit`,
    method: `POST`,
  }),

  getEditJob: new Endpoint<{
    editId: string;
  }>({
    urlTemplate: `/images/edit/{editId}`,
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

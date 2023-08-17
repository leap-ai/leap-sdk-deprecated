import { fetch } from "cross-fetch";

let API_HOST = "https://api.tryleap.ai";
const API_BASE_PATH = "/api";

if (process.env.LEAP_SDK_DEV_HOST) {
  API_HOST = process.env.LEAP_SDK_DEV_HOST;
}

class Endpoint<T = undefined> {
  private urlTemplate: string;
  public method: "POST" | "GET" | "PUT" | "DELETE";
  public version: string;

  constructor({
    urlTemplate,
    method,
    version = 1,
  }: {
    urlTemplate: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    version?: number | string;
  }) {
    this.urlTemplate = urlTemplate;
    this.method = method;
    this.version = new Number(version).toString();
  }

  getUrl(params?: T) {
    const urlBase = `${API_HOST}${API_BASE_PATH}${"/v" + this.version}`;

    if (!params) {
      return `${urlBase}${this.urlTemplate}`;
    }
    let url = this.urlTemplate;
    for (const [key, value] of Object.entries(params)) {
      url = url.replace(`{${key}}`, value as string);
    }
    return `${urlBase}${url}`;
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
      Authorization: `Bearer ${apiKey.trim()}`,
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

  trainModel: new Endpoint({
    urlTemplate: `/images/models`,
    version: 2,
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

  /**
   * INFERENCES
   */

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

  getSingleMusicInferenceJob: new Endpoint<{
    inferenceId: string;
  }>({
    urlTemplate: `/music/{inferenceId}`,
    method: `GET`,
  }),
};

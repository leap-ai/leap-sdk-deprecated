declare class Endpoint<T = undefined> {
    private urlTemplate;
    method: "POST" | "GET" | "PUT" | "DELETE";
    constructor({ urlTemplate, method, }: {
        urlTemplate: string;
        method: "POST" | "GET" | "PUT" | "DELETE";
    });
    getUrl(params?: T): string;
    fetch({ apiKey, pathParams, body, isMultiPart, }: {
        apiKey: string;
        pathParams?: T;
        body?: any;
        isMultiPart?: boolean;
    }): Promise<Response>;
}
export declare const LeapEndpoints: {
    listModels: Endpoint<undefined>;
    createModel: Endpoint<undefined>;
    getModel: Endpoint<{
        modelId: string;
    }>;
    deleteModel: Endpoint<{
        modelId: string;
    }>;
    getModelVersion: Endpoint<{
        modelId: string;
        versionId: string;
    }>;
    listModelVersions: Endpoint<{
        modelId: string;
    }>;
    listInferenceJobs: Endpoint<{
        modelId: string;
    }>;
    deleteInference: Endpoint<{
        modelId: string;
        inferenceId: string;
    }>;
    createInferenceJob: Endpoint<{
        modelId: string;
    }>;
    getInferenceJob: Endpoint<{
        modelId: string;
        inferenceId: string;
    }>;
    queueModelVersionTraining: Endpoint<{
        modelId: string;
    }>;
    listModelSamples: Endpoint<{
        modelId: string;
    }>;
    getSingleSample: Endpoint<{
        modelId: string;
        sampleId: string;
    }>;
    uploadSamples: Endpoint<{
        modelId: string;
    }>;
    uploadSamplesViaUrl: Endpoint<{
        modelId: string;
    }>;
    archiveSample: Endpoint<{
        modelId: string;
        sampleId: string;
    }>;
    createEditJob: Endpoint<undefined>;
    getEditJob: Endpoint<{
        editId: string;
    }>;
};
export {};

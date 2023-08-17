declare class Endpoint<T = undefined> {
    private urlTemplate;
    method: "POST" | "GET" | "PUT" | "DELETE";
    version: string;
    constructor({ urlTemplate, method, version, }: {
        urlTemplate: string;
        method: "POST" | "GET" | "PUT" | "DELETE";
        version?: number | string;
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
    trainModel: Endpoint<undefined>;
    getModel: Endpoint<{
        modelId: string;
    }>;
    deleteModel: Endpoint<{
        modelId: string;
    }>;
    /**
     * INFERENCES
     */
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
    /**
     * MUSIC
     */
    createMusicInferenceJob: Endpoint<undefined>;
    getMusicInferenceJobs: Endpoint<undefined>;
    getSingleMusicInferenceJob: Endpoint<{
        inferenceId: string;
    }>;
};
export {};

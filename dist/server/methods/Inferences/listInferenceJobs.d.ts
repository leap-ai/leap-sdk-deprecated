import { LeapInferenceSchema } from "../../../types/schemas/Inference";
export interface IListInferenceJobsInput {
    modelId?: string;
}
export declare const listInferenceJobService: ({ apiKey, modelId, }: {
    apiKey: string;
    modelId: string;
}) => Promise<{
    data: Promise<LeapInferenceSchema[]>;
    error: null;
} | {
    data: null;
    error: any;
}>;

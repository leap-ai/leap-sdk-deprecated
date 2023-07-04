import { LeapInferenceSchema } from "../../../types/schemas/Inference";
export interface IGetInferenceJobInput {
    modelId?: string;
    inferenceId: string;
}
export declare const getInferenceJobService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IGetInferenceJobInput;
}) => Promise<{
    data: Promise<LeapInferenceSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;

import { LeapInferenceSchema } from "../../../types/schemas/Inference";
export interface IDeleteInferenceInput {
    modelId?: string;
    inferenceId: string;
}
export declare const deleteInferenceService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IDeleteInferenceInput;
}) => Promise<{
    data: Promise<LeapInferenceSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;

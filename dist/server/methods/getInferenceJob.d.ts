import { LeapInferenceSchema } from "../../types/schemas/Inference";
import { IApiConfig } from "../Leap";
export declare const getInferenceJobService: ({ apiConfig, modelId, inferenceId, }: {
    apiConfig: IApiConfig;
    modelId: string;
    inferenceId: string;
}) => Promise<{
    data: Promise<LeapInferenceSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;

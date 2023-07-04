import { IGenerateImageParams } from "../../types/interfaces/generateImage";
import { LeapInferenceSchema } from "../../types/schemas/Inference";
import { IApiConfig } from "../Leap";
export declare const generateImageService: ({ apiConfig, modelId, params, }: {
    apiConfig: IApiConfig;
    modelId: string;
    params: IGenerateImageParams;
}) => Promise<{
    data: LeapInferenceSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;

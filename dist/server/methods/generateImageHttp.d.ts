import { LeapInferenceSchema } from "../../types/schemas/Inference";
import { IApiConfig } from "../Leap";
export declare const generateImageService: ({ apiConfig, modelId, prompt, }: {
    apiConfig: IApiConfig;
    modelId: string;
    prompt: string;
}) => Promise<LeapInferenceSchema | undefined>;

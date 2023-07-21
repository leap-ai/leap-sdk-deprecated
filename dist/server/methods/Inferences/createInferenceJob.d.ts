import { LeapInferenceSchema } from "../../../types/schemas/Inference";
export interface ICreateInferenceJobBody {
    prompt: string;
    negativePrompt?: string;
    version?: string;
    steps?: number;
    width?: number;
    height?: number;
    numberOfImages?: number;
    promptStrength?: number;
    seed?: number;
    webhookUrl?: string;
    restoreFaces?: boolean;
    enhancePrompt?: boolean;
    upscaleBy?: "x1" | "x2" | "x4";
}
export interface ICreateInferenceJobInput extends ICreateInferenceJobBody {
    modelId?: string;
}
export declare const createInferenceJobService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: ICreateInferenceJobInput;
}) => Promise<{
    data: LeapInferenceSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;

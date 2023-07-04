import { LeapInferenceSchema } from "../../../types/schemas/Inference";
interface IGenerateImageBody {
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
export interface IGenerateImageInput extends IGenerateImageBody {
    modelId?: string;
    pollingInterval?: number;
}
export declare const generateImageService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IGenerateImageInput;
}) => Promise<{
    data: LeapInferenceSchema | null;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

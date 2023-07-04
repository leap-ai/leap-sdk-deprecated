/// <reference types="multer" />
import { LeapAPIError } from "../../../types/Error";
import { LeapEditSchema } from "../../../types/schemas/Edit";
export interface IEditImageInput {
    file: Express.Multer.File;
    prompt: string;
    imageGuidanceScale?: number;
    textGuidanceScale?: number;
    steps?: number;
    seed?: number;
    webhookUrl?: string;
    pollingInterval?: number;
}
export interface IEditImageServiceInput {
    apiKey: string;
    input: IEditImageInput;
}
export interface IEditImageServiceResponse {
    data: LeapEditSchema | null;
    error: LeapAPIError | string | null;
}
export declare const editImageService: ({ apiKey, input: { file, prompt, imageGuidanceScale, textGuidanceScale, steps, seed, webhookUrl, pollingInterval, }, }: IEditImageServiceInput) => Promise<IEditImageServiceResponse>;

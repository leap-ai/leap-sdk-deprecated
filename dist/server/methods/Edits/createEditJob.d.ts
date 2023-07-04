/// <reference types="multer" />
import { LeapAPIError } from "../../../types/Error";
import { LeapEditSchema } from "../../../types/schemas/Edit";
export interface ICreateEditJobInput {
    file: Express.Multer.File;
    prompt: string;
    imageGuidanceScale?: number;
    textGuidanceScale?: number;
    steps?: number;
    seed?: number;
    webhookUrl?: string;
}
export interface ICreateEditJobServiceInput {
    apiKey: string;
    input: ICreateEditJobInput;
}
export interface ICreateEditJobServiceResponse {
    data: LeapEditSchema | null;
    error: LeapAPIError | string | null;
}
export declare const createEditJobService: ({ apiKey, input: { file, prompt, imageGuidanceScale, textGuidanceScale, steps, seed, webhookUrl, }, }: ICreateEditJobServiceInput) => Promise<ICreateEditJobServiceResponse>;

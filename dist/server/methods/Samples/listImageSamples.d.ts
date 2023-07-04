import { LeapSampleSchema } from "../../../types/schemas/Sample";
interface IBody {
}
export interface IListImageSamplesInput extends IBody {
    modelId: string;
}
export declare const listImageSamplesService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IListImageSamplesInput;
}) => Promise<{
    data: Promise<LeapSampleSchema[]>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

import { LeapModelSchema } from "../../../types/schemas/Model";
type ImageSamples = {
    imageSampleUrls: string[];
} | {
    imageSampleFiles: File[];
};
interface IBodyBase {
    name?: string;
    subjectKeyword?: string;
    subjectType?: string;
    webhookUrl?: string;
}
type IBody = IBodyBase & ImageSamples;
export type ITrainModelInput = IBody;
export declare const trainModelService: ({ apiKey, input, }: {
    apiKey: string;
    input: ITrainModelInput;
}) => Promise<{
    data: LeapModelSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

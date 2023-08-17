import { LeapModelSchema } from "../../../types/schemas/Model";
interface IBody {
}
export interface IGetModelInput extends IBody {
    modelId: string;
}
export declare const getModelService: ({ apiKey, modelId, }: {
    apiKey: string;
    modelId: string;
}) => Promise<{
    data: LeapModelSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

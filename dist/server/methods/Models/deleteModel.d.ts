import { LeapModelSchema } from "../../../types/schemas/Model";
interface IBody {
}
export interface IDeleteModelInput extends IBody {
    modelId: string;
}
export declare const deleteModelService: ({ apiKey, modelId, }: {
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

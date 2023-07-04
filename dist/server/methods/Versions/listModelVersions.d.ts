import { LeapVersionSchema } from "../../../types/schemas/Version";
interface IBody {
}
export interface IListModelVersionsInput extends IBody {
    modelId: string;
}
export declare const listModelVersionsService: ({ apiKey, modelId, }: {
    apiKey: string;
    modelId: string;
}) => Promise<{
    data: Promise<LeapVersionSchema[]>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

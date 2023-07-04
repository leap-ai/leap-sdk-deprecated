import { LeapModelSchema } from "../../../types/schemas/Model";
interface IBody {
}
export interface IListModelsInput extends IBody {
}
export declare const listModelService: ({ apiKey }: {
    apiKey: string;
}) => Promise<{
    data: Promise<LeapModelSchema[]>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

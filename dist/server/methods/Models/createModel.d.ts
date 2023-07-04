import { LeapModelSchema } from "../../../types/schemas/Model";
interface IBody {
    title: string;
    subjectKeyword: string;
    subjectIdentifier?: string;
}
export interface ICreateModelInput extends IBody {
}
export declare const createModelService: ({ apiKey, input, }: {
    apiKey: string;
    input: ICreateModelInput;
}) => Promise<{
    data: Promise<LeapModelSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};

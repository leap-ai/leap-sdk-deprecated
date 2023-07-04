import { LeapVersionSchema } from "../../../types/schemas/Version";
export interface IGetEditJobInput {
    editId: string;
}
export declare const getEditJobService: ({ apiKey, input, }: {
    apiKey: string;
    input: IGetEditJobInput;
}) => Promise<{
    data: Promise<LeapVersionSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;

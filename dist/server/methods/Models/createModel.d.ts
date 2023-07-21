import { ModelSubjectTypesEnum } from "../../../enums/ModelSubjectType";
import { LeapModelSchema } from "../../../types/schemas/Model";
interface IBody {
    /**
     * The title for the model. This is used for display purposes.
     */
    title: string;
    /**
     * The keyword that you include in the prompt which triggers
     * the model to generate an image of your subject.
     */
    subjectKeyword: string;
    /**
     * The identifier for the subject. This string should be unique
     * so that the model can identify the subject in the prompt.
     *
     * This parameter is optional - if you do not provide one, the
     * API will generate one for you.
     *
     * An example can be a random string of characters like "a1b2c3d4e5f6".
     */
    subjectIdentifier?: string;
    /**
     * The type of subject that the model will generate.
     *
     * Some options include:
     * - ModelSubjectTypesEnum.PERSON
     * - ModelSubjectTypesEnum.CAT
     * - ModelSubjectTypesEnum.DOG
     *
     * @default ModelSubjectTypesEnum.PERSON
     */
    subjectType?: ModelSubjectTypesEnum;
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

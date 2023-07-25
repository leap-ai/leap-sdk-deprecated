import { LeapEndpoints } from "../../../constants/endpoints";

import { LeapAPIError } from "../../../types/Error";
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
   * - "person"
   * - "animal"
   * - "object"
   */
  subjectType: string;
}

export interface ICreateModelInput extends IBody {}

export const createModelService = async ({
  apiKey,
  input,
}: {
  apiKey: string;
  input: ICreateModelInput;
}) => {
  const { createModel } = LeapEndpoints;

  const body: IBody = {
    title: input.title,
    subjectKeyword: input.subjectKeyword,
    subjectIdentifier: input.subjectIdentifier,
    subjectType: input.subjectType,
  };

  try {
    const response = await createModel.fetch({
      apiKey,
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as Promise<LeapModelSchema>;

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapInferenceSchema } from "../../../types/schemas/Inference";

export interface IDeleteInferenceInput {
  modelId?: string;
  inferenceId: string;
}

export const deleteInferenceService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IDeleteInferenceInput;
}) => {
  const { deleteInference } = LeapEndpoints;

  try {
    const response = await deleteInference.fetch({
      apiKey,
      pathParams: {
        modelId,
        inferenceId: input.inferenceId,
      },
    });

    const data = (await response.json()) as Promise<LeapInferenceSchema>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

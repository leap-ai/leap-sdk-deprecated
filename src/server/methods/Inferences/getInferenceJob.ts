import { fetch } from "cross-fetch";
import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapInferenceSchema } from "../../../types/schemas/Inference";

export interface IGetInferenceJobInput {
  modelId?: string;
  inferenceId: string;
}

export const getInferenceJobService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IGetInferenceJobInput;
}) => {
  const { getInferenceJob } = LeapEndpoints;

  try {
    const response = await getInferenceJob.fetch({
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

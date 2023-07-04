import { fetch } from "cross-fetch";
import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapInferenceSchema } from "../../../types/schemas/Inference";

export interface IListInferenceJobsInput {
  modelId?: string;
}

export const listInferenceJobService = async ({
  apiKey,
  modelId,
}: {
  apiKey: string;
  modelId: string;
}) => {
  const { listInferenceJobs } = LeapEndpoints;

  try {
    const response = await listInferenceJobs.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
    });

    const data = (await response.json()) as Promise<LeapInferenceSchema[]>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

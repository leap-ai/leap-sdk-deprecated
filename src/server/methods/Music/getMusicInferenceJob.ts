import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapMusicSchema } from "../../../types/schemas/Music";

export interface IGetMusicInferenceJobInput {
  inferenceId: string;
}

export const getMusicInferenceJobService = async ({
  apiKey,
  input,
}: {
  apiKey: string;
  input: IGetMusicInferenceJobInput;
}) => {
  const { getSingleMusicInferenceJob } = LeapEndpoints;

  try {
    const response = await getSingleMusicInferenceJob.fetch({
      apiKey,
      pathParams: {
        inferenceId: input.inferenceId,
      },
    });

    let responseJson = await response.json();
    const data = responseJson as LeapMusicSchema;

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

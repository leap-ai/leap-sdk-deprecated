import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapMusicSchema } from "../../../types/schemas/Music";

export const listMusicInferenceJobService = async ({
  apiKey,
}: {
  apiKey: string;
}) => {
  const { getMusicInferenceJobs } = LeapEndpoints;

  try {
    const response = await getMusicInferenceJobs.fetch({
      apiKey,
    });

    let responseJson = await response.json();
    const data = responseJson as LeapMusicSchema[];

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapMusicSchema } from "../../../types/schemas/Music";

export interface ICreateMusicInferenceJobBody {
  prompt: string;
  duration?: number;
}

export interface ICreateMusicInferenceJobInput
  extends ICreateMusicInferenceJobBody {}

export const createMusicInferenceJobService = async ({
  apiKey,
  input,
}: {
  apiKey: string;
  input: ICreateMusicInferenceJobInput;
}) => {
  const { createMusicInferenceJob } = LeapEndpoints;

  const body: ICreateMusicInferenceJobBody = {
    prompt: input.prompt,
    duration: input.duration,
  };

  try {
    const response = await createMusicInferenceJob.fetch({
      apiKey,
      body: JSON.stringify(body),
    });

    let responseJson = await response.json();
    const data = responseJson as LeapMusicSchema;

    if (!response.ok) {
      return { data: null, error: response.statusText };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

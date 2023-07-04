import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";
import { LeapVersionSchema } from "../../../types/schemas/Version";

interface IBody {
  webhookUrl?: string;
}

export interface IQueueModelVersionTrainingInput extends IBody {
  modelId: string;
}

export const queueModelVersionTrainingService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IQueueModelVersionTrainingInput;
}) => {
  const { queueModelVersionTraining } = LeapEndpoints;

  const body: IBody = {
    webhookUrl: input.webhookUrl,
  };

  try {
    const response = await queueModelVersionTraining.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as Promise<LeapVersionSchema>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

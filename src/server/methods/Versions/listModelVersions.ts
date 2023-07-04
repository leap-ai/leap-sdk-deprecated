import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";
import { LeapVersionSchema } from "../../../types/schemas/Version";

interface IBody {}

export interface IListModelVersionsInput extends IBody {
  modelId: string;
}

export const listModelVersionsService = async ({
  apiKey,
  modelId,
}: {
  apiKey: string;
  modelId: string;
}) => {
  const { listModelVersions } = LeapEndpoints;

  try {
    const response = await listModelVersions.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
    });

    const data = (await response.json()) as Promise<LeapVersionSchema[]>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

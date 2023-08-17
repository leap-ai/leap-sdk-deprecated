import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";

interface IBody {}

export interface IListModelsInput extends IBody {}

export const listModelService = async ({ apiKey }: { apiKey: string }) => {
  const { listModels } = LeapEndpoints;

  try {
    const response = await listModels.fetch({
      apiKey,
    });

    let responseJson = await response.json();
    const data = responseJson as LeapModelSchema[];

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }

    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

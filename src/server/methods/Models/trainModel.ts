import { LeapEndpoints } from "../../../constants/endpoints";

import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";

type ImageSamples =
  | {
      imageSampleUrls: string[];
    }
  | {
      imageSampleFiles: File[];
    };

interface IBodyBase {
  name?: string;
  subjectKeyword?: string;
  subjectType?: string;
  webhookUrl?: string;
}

type IBody = IBodyBase & ImageSamples;

export type ITrainModelInput = IBody;

export const trainModelService = async ({
  apiKey,
  input,
}: {
  apiKey: string;
  input: ITrainModelInput;
}) => {
  const { trainModel } = LeapEndpoints;

  const body: IBody = {
    name: input.name,
    subjectKeyword: input.subjectKeyword,
    subjectType: input.subjectType,
    webhookUrl: input.webhookUrl,
    ...((input as any).imageSampleUrls && {
      imageSampleUrls: (input as any).imageSampleUrls,
    }),
    ...((input as any).imageSampleFiles && {
      imageSampleFiles: (input as any).imageSampleFiles,
    }),
  };

  try {
    const formData = new FormData();

    if (body.name !== undefined) {
      formData.append("name", String(body.name));
    }
    if (body.subjectKeyword !== undefined) {
      formData.append("subjectKeyword", String(body.subjectKeyword));
    }
    if (body.subjectType !== undefined) {
      formData.append("subjectType", String(body.subjectType));
    }
    if (body.webhookUrl !== undefined) {
      formData.append("webhookUrl", String(body.webhookUrl));
    }
    if ((body as any).imageSampleUrls !== undefined) {
      // Loop and append each url to the form data
      for (const url of (body as any).imageSampleUrls) {
        formData.append("imageSampleUrls", String(url));
      }
    }
    if ((body as any).imageSampleFiles !== undefined) {
      // Loop and append each file to the form data
      for (const file of (body as any).imageSampleFiles) {
        formData.append("imageSampleFiles", file.buffer, file.originalname);
      }
    }

    const response = await trainModel.fetch({
      apiKey,
      body: formData,
      isMultiPart: true,
    });

    let responseJson = await response.json();
    const data = responseJson as LeapModelSchema;

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

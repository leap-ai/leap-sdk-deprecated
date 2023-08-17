import {
  createInferenceJobService,
  ICreateInferenceJobInput,
} from "./methods/Inferences/createInferenceJob";
import {
  deleteInferenceService,
  IDeleteInferenceInput,
} from "./methods/Inferences/deleteInference";
import {
  generateImageService,
  IGenerateImageInput,
} from "./methods/Inferences/generateImage";
import {
  getInferenceJobService,
  IGetInferenceJobInput,
} from "./methods/Inferences/getInferenceJob";
import {
  IListInferenceJobsInput,
  listInferenceJobService,
} from "./methods/Inferences/listInferenceJobs";
import {
  deleteModelService,
  IDeleteModelInput,
} from "./methods/Models/deleteModel";
import { getModelService, IGetModelInput } from "./methods/Models/getModel";
import { listModelService } from "./methods/Models/listModels";
import {
  ITrainModelInput,
  trainModelService,
} from "./methods/Models/trainModel";
import {
  createMusicInferenceJobService,
  ICreateMusicInferenceJobInput,
} from "./methods/Music/createMusicInferenceJob";
import {
  getMusicInferenceJobService,
  IGetMusicInferenceJobInput,
} from "./methods/Music/getMusicInferenceJob";
import { listMusicInferenceJobService } from "./methods/Music/listMusicInferenceJobs";

// // Throw an error if this is implemented client-side
if (typeof window !== "undefined") {
  throw new Error(
    "Leap SDK is not intended to be used client-side. Please use the Leap SDK in a Node.js environment."
  );
}

const publicModels = {
  sdxl: "26a1a203-3a46-42cb-8cfa-f4de075907d8",
  "sd-1.5": "8b1b897c-d66d-45a6-b8d7-8e32421d02cf",
  "sd-2.1": "ee88d150-4259-4b77-9d0f-090abe29f650",
  "realistic-vision-v4.0": "37d42ae9-5f5f-4399-b60b-014d35e762a5",
  "realistic-vision-v2.0": "eab32df0-de26-4b83-a908-a83f3015e971",
  "openjourney-v4": "1e7737d7-545e-469f-857f-e4b46eaa151d",
  "openjourney-v2": "d66b1686-5e5d-43b2-a2e7-d295d679917c",
  "openjourney-v1": "7575ea52-3d4f-400f-9ded-09f7b1b1a5b8",
  "future-diffusion": "1285ded4-b11b-4993-a491-d87cdfe6310c",
  "modern-disney": "8ead1e66-5722-4ff6-a13f-b5212f575321",
};

export class Leap {
  private API_KEY: string;
  private CURRENT_MODEL_ID: string;

  constructor(apiKey: string, modelId?: keyof typeof publicModels) {
    this.API_KEY = apiKey;
    this.CURRENT_MODEL_ID = modelId
      ? publicModels[modelId]
      : publicModels["sdxl"];
  }

  /**
   * INTERNAL STATE UTILS
   */

  public useModel = (modelId: keyof typeof publicModels) => {
    this.CURRENT_MODEL_ID = publicModels[modelId];
  };

  /**
   * GENERATE
   */

  // Inferences
  public generate = {
    generateImage: async (input: IGenerateImageInput) => {
      return generateImageService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    createInferenceJob: async (input: ICreateInferenceJobInput) => {
      return createInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    getInferenceJob: async (input: IGetInferenceJobInput) => {
      return getInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    listInferenceJobs: async (input?: IListInferenceJobsInput) => {
      return listInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
    deleteInference: async (input: IDeleteInferenceInput) => {
      return deleteInferenceService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
  };

  /**
   * FINE-TUNE
   */
  public fineTune = {
    // Models
    /**
     * Creates a new model. This is the first step in the fine-tuning process.
     *
     * @param input - The input parameters used when creating the model.
     * @returns - The newly created model.
     */
    trainModel: async (input: ITrainModelInput) => {
      return trainModelService({
        apiKey: this.API_KEY,
        input,
      });
    },
    listModels: async () => {
      return listModelService({
        apiKey: this.API_KEY,
      });
    },
    getModel: async (input: IGetModelInput) => {
      return getModelService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
    deleteModel: async (input: IDeleteModelInput) => {
      return deleteModelService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
  };

  public music = {
    submitMusicGenerationJob: async (input: ICreateMusicInferenceJobInput) => {
      return createMusicInferenceJobService({
        apiKey: this.API_KEY,
        input,
      });
    },

    getMusicGenerationJob: async (input: IGetMusicInferenceJobInput) => {
      return getMusicInferenceJobService({
        apiKey: this.API_KEY,
        input,
      });
    },

    listMusicGenerationJobs: async () => {
      return listMusicInferenceJobService({
        apiKey: this.API_KEY,
      });
    },
  };
}

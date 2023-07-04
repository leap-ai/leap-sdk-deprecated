import { IApiConfig } from "./Leap";
export declare const makeRequest: <T>({ apiConfig, endpointUrl, postData, }: {
    apiConfig: IApiConfig;
    endpointUrl: string;
    postData?: string | undefined;
}) => Promise<T>;

export declare class LeapServer {
    private API_KEY;
    private API_BASE_URL;
    private app;
    constructor(apiKey: string);
    private getUserHandler;
    getApp(): import("express-serve-static-core").Express;
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapServer = void 0;
const express_1 = __importDefault(require("express"));
class LeapServer {
    constructor(apiKey) {
        this.API_BASE_URL = "https://api.example.com/v1";
        this.app = (0, express_1.default)();
        this.getUserHandler = async (req, res) => {
            const { userId } = req.body;
            try {
                const response = await fetch(`${this.API_BASE_URL}/users/${userId}`, {
                    headers: { Authorization: `Bearer ${this.API_KEY}` },
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                res.send(data);
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "Failed to fetch data from API" });
            }
        };
        this.API_KEY = apiKey;
        this.app.use(express_1.default.json());
        this.app.post("/api/get-user", this.getUserHandler);
    }
    getApp() {
        return this.app;
    }
}
exports.LeapServer = LeapServer;

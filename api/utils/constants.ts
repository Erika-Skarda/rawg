import dotenv from "dotenv";

dotenv.config();
export const rawgApiKey = process.env.RAWG_API_KEY;
export const baseUrl = "https://api.rawg.io/api/games"
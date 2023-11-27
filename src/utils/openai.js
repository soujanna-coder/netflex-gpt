import OpenAI from "openai";
import { API_KEYS } from "./constants";
console.log("api key", API_KEYS);
console.log("REACT_APP" + process.env.REACT_APP_API_KEYS);
export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEYS, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

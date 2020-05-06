import axios from "axios";
require("dotenv").config();
console.log("API key server:", process.env.YOUTUBE_API_KEY);

console.log("HELLO server:", process.env.HELLO);

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const params = {
  part: "snippet",
  maxResults: 2,
  key: process.env.YOUTUBE_API_KEY,
};

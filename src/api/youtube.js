import axios from "axios";
require("dotenv").config();

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const params = {
  part: "snippet",
  maxResults: 2,
  key: process.env.YOUTUBE_API_KEY,
};

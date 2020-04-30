import axios from "axios";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const params = {
  part: "snippet",
  maxResults: 2,
  key: "ADD API KEY",
};

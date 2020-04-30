import axios from "axios";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const params = {
  part: "snippet",
  maxResults: 2,
  key: "AIzaSyCJ9S8ll7oZcJVLj_TGH-a-0jbuaDnHRgg",
  // q: "fish",
};

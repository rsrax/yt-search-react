import axios from "axios";
require("dotenv").config();

const KEY = process.env.REACT_APP_YT_API_KEY;

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

import axios from "axios";

const KEY = "AIzaSyDPq5MboZoGbykwZ8ME1AfL1hfguZpIYHM";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

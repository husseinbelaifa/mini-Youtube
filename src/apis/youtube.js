import axios from "axios";
const KEY = "AIzaSyDvN4jPE5QkCKBESkQBigqUMvG3xiSfXBA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});

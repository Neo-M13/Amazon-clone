import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/zaio--clone-9e7bd/us-central1/api", // The API (Cloud function URL)
});

export default instance;


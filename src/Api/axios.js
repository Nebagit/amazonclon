import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase
  // baseURL: "http://127.0.0.1:5001/clone-b6f8b/us-central1/api",
  //deployed version of amazon server on render
  baseURL: "https://amazon-api-deploy-j162.onrender.com/"
});

export {axiosInstance}
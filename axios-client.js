import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URL } from "@env";

const axiosClient = axios.create({
  baseURL: BACKEND_URL,
});

// This function is executed before sending of request
axiosClient.interceptors.request.use((config) => {
  let access_token = "";
  AsyncStorage.getItem("ACCESS_TOKEN").then((token) => {
    access_token = token;
  });

  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

// This function is executed after the recieving of response
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      console.log(BACKEND_URL);
      
      if (response.status === 401) {
        AsyncStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (e) {
      console.error(e);
    }

    throw error;
  }
);

export default axiosClient;

import axios from "axios";
import { toast } from "vue3-toastify";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.message, {
      toastStyle: {
        fontSize: "14px",
      },
    });
    return Promise.reject(error);
  }
);

export default instance;

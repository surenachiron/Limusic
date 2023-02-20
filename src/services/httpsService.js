import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    return Promise.reject(error);
});
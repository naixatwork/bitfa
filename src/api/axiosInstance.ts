import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://onchain.dextrading.com/',
});

export default axiosInstance;

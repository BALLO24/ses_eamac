import axios from "axios";
//axios.defaults.baseURL=import.meta.env.VITE_API_URL;

const instance=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export default instance;
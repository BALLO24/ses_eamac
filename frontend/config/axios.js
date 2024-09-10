import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
// axios.defaults.baseURL=process.env.REACT_APP_API_URL
const baseURL=process.env.REACT_APP_API_URL;
const instance = axios.create({
    baseURL,
  });
  
  export default instance;
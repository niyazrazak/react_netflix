import axios from "axios";

import { basUrl } from "./Constants/Constants";
const instance = axios.create({
    baseURL: basUrl,
});

export default instance;
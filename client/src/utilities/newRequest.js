import axios from "axios";

// creating a function that will direct requests to the backend api server
const newRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials:true,
});

export default newRequest;
import axios from "axios";

const AuthApiClient = axios.create({
    baseURL: "https://sci-mart.vercel.app/api/v1"
})

AuthApiClient.interceptors.request.use((config) => {
        const token = localStorage.getItem("authTokens");
        if(token){
            config.headers.Authorization = `JWT ${JSON.parse(token).access}`    
        }        
        return config;
    },  
    (error) => Promise.reject(error)
);

export default AuthApiClient; 
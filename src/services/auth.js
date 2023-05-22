import { baseUrl } from '../axios/Base';



export const registerUser = async (payload) => {
    const response = baseUrl.post("/register", payload);
    return response;
  };


  export const loginUser = async (payload) => {
    const response = baseUrl.post('/login', payload);
    return response;
  };


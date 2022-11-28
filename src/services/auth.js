import { baseUrl } from '../axios/Base';



export const registerUser = async (payload) => {
    const response = baseUrl.post("/register", payload);
    return response;
  };


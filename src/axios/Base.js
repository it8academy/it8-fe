import axios from 'axios';

export const url = 'https://api.it8-academy.com/api/v1';

export const baseUrl = axios.create({
    baseURL: `${url}/auth`,
  });

  
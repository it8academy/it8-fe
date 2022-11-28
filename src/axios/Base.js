import axios from 'axios';

export const url = 'https://it8-academy.herokuapp.com/api/v1';

export const baseUrl = axios.create({
    baseURL: `${url}/auth`,
  });
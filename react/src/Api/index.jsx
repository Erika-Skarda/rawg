import axios from 'axios';
import { baseUrl } from '../Utils/constants';

export const getRawgApi = async (page) => {
  try {
      const { data } = await axios.get(`${baseUrl}/trending?page=${page}`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
} 

export const getGameById = async (id) => {
  try {
      const { data } = await axios.get(`${baseUrl}/:${id}`);
      console.log("API", data)
      return data;
  } catch(error) {
      console.error(error.response)
  }
} 
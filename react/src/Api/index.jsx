import axios from 'axios';
import { baseUrl } from '../Utils/constants';

export const getRandomImage = async () => {
  try {
      const { data } = await axios.get(`${baseUrl}/`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
}; 

export const getRawgApi = async (page) => {
  try {
      const { data } = await axios.get(`${baseUrl}/trending?page=${page}`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
}; 

export const getGameById = async (id) => {
  try {
      const { data } = await axios.get(`${baseUrl}/${id}`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
}; 

export const getDevelopers = async (id) => {
  try {
      const { data } = await axios.get(`${baseUrl}/${id}/developers`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
}; 

export const getScreenshots = async (id) => {
  try {
      const { data } = await axios.get(`${baseUrl}/${id}/screenshots`);
      return data;
  } catch(error) {
      console.error(error.response)
  }
}; 
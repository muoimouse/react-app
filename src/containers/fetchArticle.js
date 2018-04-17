import axios from 'axios';
import { BASE_URL } from '../constants';

export const listArticle = () => {
  return axios.get(BASE_URL + '/article')
    .then((results) => {
      return results;
    })
    .catch((error) => {
      return false;
    });
};
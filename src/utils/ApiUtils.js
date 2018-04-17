import axios from 'axios';
import { BASE_URL } from '../constants';

export const getApi = (url, data) => {
  const getUrl = BASE_URL + '/' + url;
  axios.get(getUrl, {
    params: data
  }).then((results) => {
      return results;
  })
    .catch((errors) => {
      return errors;
    });
};

export const postApi = (url, data) => {
  const postUrl = BASE_URL + '/' + url;
  axios.post(postUrl, data)
    .then((results) => {
      return results;
    })
    .catch((errors) => {
      return errors;
    });
};

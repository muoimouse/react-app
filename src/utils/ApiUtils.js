import axios from 'axios';
import { BASE_URL } from '../constants/ApiConstants';

export const getApi = (url, data) => {
  const getUrl = `${BASE_URL}/${url || ''}`;
  return axios.get(getUrl, {
    params: data || '',
  }).then(results => (
    results
  )).catch(errors => (
    errors
  ));
};

export const postApi = (url, data) => {
  const postUrl = `${BASE_URL}/${url}`;
  axios.post(postUrl, data)
    .then(results => (
      results
    ))
    .catch(errors => (
      errors
    ));
};

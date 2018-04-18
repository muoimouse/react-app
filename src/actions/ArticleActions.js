import { getApi, postApi } from '../utils/ApiUtils';
import { FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS } from '../constants/ActionTypes';

export const fetchArticlesRequest = (listArticle, url) => {
  return {
    type: FETCH_ARTICLE_REQUEST,
    listArticle
  };
};

export const fetchArticlesSuccess = (listArticle) => ({
  type: FETCH_ARTICLE_SUCCESS,
  listArticle
});

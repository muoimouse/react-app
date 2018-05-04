import { getApi } from '../utils/ApiUtils';
import { FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_ERROR } from '../constants/ActionTypes';

export const getArticlesRequest = () => ({
  type: FETCH_ARTICLE_REQUEST,
});

export const getArticlesSuccess = payload => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload,
});

export const fetchArticleError = () => ({
  type: FETCH_ARTICLE_ERROR,
});

export const getArticleWithRedux = () => async (dispatch) => {
  await dispatch(getArticlesRequest());
  const url = 'article';
  const results = await getApi(url);
  return dispatch(getArticlesSuccess(results.data.data));
};

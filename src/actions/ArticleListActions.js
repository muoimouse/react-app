import { getApi } from '../utils/ApiUtils';
import { FETCH_ALL_ARTICLE_REQUEST, FETCH_ALL_ARTICLE_SUCCESS, FETCH_ALL_ARTICLE_ERROR } from '../constants/ActionTypes';

export const fetchAllArticlesRequest = payload => ({
  type: FETCH_ALL_ARTICLE_REQUEST,
  payload,
});

export const fetchAllArticlesSuccess = (payload, data) => ({
  type: FETCH_ALL_ARTICLE_SUCCESS,
  articleList: data,
  receivedAt: Date.now(),
});

export const fetchArticleError = () => ({
  type: FETCH_ALL_ARTICLE_ERROR,
});

export const fetchAllArticle = payload => async (dispatch) => {
  await dispatch(fetchAllArticlesRequest(payload));
  const url = 'article';
  const results = await getApi(url);
  if (results && results.data && results.data.data) {
    return dispatch(fetchAllArticlesSuccess(payload, results.data.data));
  }
  return dispatch(fetchArticleError());
};

const shouldFetchAllArticle = (state, payload) => {
  const allArticle = state.allArticleByPayload[payload];
  if (!allArticle) {
    return true;
  }
  if (allArticle) {
    return false;
  }
  return allArticle.didInvalidate;
};

export const fetchAllArticleIfNeed = payload => (dispatch, getState) => {
  if (shouldFetchAllArticle(getState(), payload)) {
    return dispatch(fetchAllArticle(payload));
  }
};

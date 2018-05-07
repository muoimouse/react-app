import { getApi } from '../utils/ApiUtils';
import { FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_ERROR } from '../constants/ActionTypes';

export const fetchArticleRequest = () => ({
  type: FETCH_ARTICLE_REQUEST,
});

export const fetchArticleSuccess = data => ({
  type: FETCH_ARTICLE_SUCCESS,
  article: data,
  receivedAt: Date.now(),
});

export const fetchArticleError = () => ({
  type: FETCH_ARTICLE_ERROR,
});

export const fetchArticle = payload => async (dispatch) => {
  await dispatch(fetchArticleRequest());
  const url = 'article/info';
  const query = {
    id: payload,
  };
  const result = await getApi(url, query);
  console.log(result)
  return dispatch(fetchArticleSuccess(result.data.data));
};

const shouldFetchArticle = (state, payload) => {
  const article = state.articleByPayload[payload];
  if (!article) {
    return true;
  }
  if (article) {
    return false;
  }
  return article.didInvalidate;
};

export const fetchArticleIfNeed = payload => (dispatch, getState) => {
  if (shouldFetchArticle(getState(), payload)) {
    return dispatch(fetchArticle(payload));
  }
  return dispatch(fetchArticleError());
};

import { getApi } from '../utils/ApiUtils';
import { FETCH_ALL_ARTICLE_REQUEST, FETCH_ALL_ARTICLE_SUCCESS, FETCH_ALL_ARTICLE_ERROR } from '../constants/ActionTypes';

export const getAllArticlesRequest = () => ({
  type: FETCH_ALL_ARTICLE_REQUEST,
});

export const getAllArticlesSuccess = payload => ({
  type: FETCH_ALL_ARTICLE_SUCCESS,
  payload,
});

export const fetchArticleError = () => ({
  type: FETCH_ALL_ARTICLE_ERROR,
});

// const shouldFetchArticle = (state) => {
//   if (!)
// }

export const getArticleWithRedux = () => async (dispatch) => {
  await dispatch(getAllArticlesRequest());
  const url = 'article';
  const results = await getApi(url);
  return dispatch(getAllArticlesSuccess(results.data.data));
};

import {
  FETCH_ALL_ARTICLE_REQUEST,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
} from '../constants/ActionTypes';

const articleListDefault = {};

export default (state = articleListDefault, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLE_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_ALL_ARTICLE_SUCCESS:
      return { ...state, articleList: action.payload, isFetching: false };
    default:
      return state;
  }
};

import {
  FETCH_ALL_ARTICLE_REQUEST,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
} from '../constants/ActionTypes';

const articleListDefault = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const allArticle = (state = articleListDefault, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLE_ERROR:
      return {
        ...state,
        didInvalidate: true,
      };
    case FETCH_ALL_ARTICLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case FETCH_ALL_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.articleList,
        lastUpdate: action.receivedAt,
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLE_REQUEST:
    case FETCH_ALL_ARTICLE_SUCCESS:
    case FETCH_ALL_ARTICLE_ERROR:
      return {
        ...state,
        reactjs: allArticle(state[action.reactjs], action),
      };
    default:
      return state;
  }
};


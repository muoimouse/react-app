import { FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS } from '../constants/ActionTypes';

const articleListDefault = {};

export default (state = articleListDefault, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return state;
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, articleList: action.payload };
    default:
      return state;
  }
};

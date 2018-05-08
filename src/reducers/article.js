import { FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_ERROR } from '../constants/ActionTypes';

const articleDefault = {
  isFetching: true,
  didInvalidate: false,
  data: {},
};

const article = (state = articleDefault, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        didInvalidate: true,
      };
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        didInvalidate: false,
        isFetching: true,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        data: action.article,
      };
    default:
      return state;
  }
};

const articleByPayload = (state = {}, action) => {
  // console.log('state', state);
  // console.log('action', action);
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
    case FETCH_ARTICLE_SUCCESS:
    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        [action.payload]: article(state[action.payload], action),
      };
    default:
      return state;
  }
};

export default articleByPayload;

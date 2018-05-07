import { combineReducers } from 'redux';
import allArticleByPayload from './articleList';
import articleByPayload from './article';

const rootReducer = combineReducers({
  allArticleByPayload,
  articleByPayload,
});

export default rootReducer;

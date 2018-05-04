import { connect } from 'react-redux';
import ArticleList from '../components/layout/ArticleList';
import { getArticleWithRedux } from '../actions/ArticleListActions';

const mapStateToProps = state => ({
  articleList: state.articleList.articleList,
});

export default connect(mapStateToProps, { getArticleWithRedux })(ArticleList);

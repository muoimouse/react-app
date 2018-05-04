import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from '../../components/layout/ArticleListItem';

const propTypes = {
  getArticleWithRedux: PropTypes.func.isRequired,
  articleList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

class ArticleList extends Component {
  componentDidMount() {
    this.props.getArticleWithRedux();
  }
  render() {
    console.log(this.props);
    return (
      <ul>
        {
          this.props.articleList &&
          this.props.articleList.map(article => (
            <ArticleListItem article={article} />
          ))
        }
      </ul>
    );
  }
}

ArticleList.propTypes = propTypes;
export default ArticleList;

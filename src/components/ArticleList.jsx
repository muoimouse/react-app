import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';

const propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const ArticleList = ({ articleList }) => (
  <div>
    {
      articleList.map((article, i) => (
        <ArticleListItem
          key={i}
          article={article}
        />
      ))
    }
  </div>
);

ArticleList.propTypes = propTypes;
export default ArticleList;

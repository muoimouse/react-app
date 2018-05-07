import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

const ArticleHeader = ({
  title,
  author,
  category,
  commentCount,
  created,
}) => (
  <header>
    <h1>{title}</h1>
    <div className="entry-meta">
      <i href="" className="fa fa-user">{author}</i>
      <i href="" className="fa fa-folder-open">{category}</i>
      <i href="" className="fa fa-comment">{commentCount} phản hồi</i>
      <i href="" className="fa fa-clock-o">{created}</i>
    </div>
  </header>
);

ArticleHeader.propTypes = propTypes;
export default ArticleHeader;

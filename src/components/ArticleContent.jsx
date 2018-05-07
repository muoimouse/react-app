import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired,
};

const ArticleContent = ({
  content,
}) => (
  <div className="post-content">
    {content}
  </div>
);

ArticleContent.propTypes = propTypes;
export default ArticleContent;

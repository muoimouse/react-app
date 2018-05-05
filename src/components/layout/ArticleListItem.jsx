import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IMAGE_POST } from '../../constants/Style';

const propTypes = {
  article: PropTypes.shape({}).isRequired,
};

const ArticleListItem = ({
  article,
}) => {
  const {
    title,
    author,
    articleCategory,
    createdAt,
  } = article;
  return (
    <div className="card flex-md-row mb-1 box-shadow h-md-250">
      <div className="row">
        <div className="col-sm-4" style={IMAGE_POST}>
          <img className="card-img-right flex-auto d-none d-lg-block" src="./img/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt={title} />
        </div>
        <div className="col-sm-8">
          <div className="card-body d-flex flex-column align-items-start">
            <h3 className="mb-0">
              <a className="text-dark" href="#">{title}</a>
            </h3>
            <div className="mb-0 text-muted">
              <i className="post-time">{createdAt}</i>
            </div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
              lead-in to additional content.</p>
            <i> <Link to="/post">Continue reading</Link> </i>
            <div className="entry-meta">
              <a href="" className="fa fa-user">{author}</a>
              <a href="" className="fa fa-folder-open">{articleCategory}</a>
              <a href="" className="fa fa-comment"> 8 phản hồi</a>
              <a href="" className="fa fa-clock-o">{createdAt}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleListItem.propTypes = propTypes;
export default ArticleListItem;

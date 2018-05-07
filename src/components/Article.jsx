import React from 'react';
import PropTypes from 'prop-types';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import * as ARTICLE from '../constants/ArticleConstants';

const Share = () => (
  <div>
    chia se
  </div>
);

const Tag = () => (
  <div className="tags col-sm-12">
    <span>Tags </span>
    <a className="tag" href="#">Promise</a>
    <a className="tag" href="#">Promise</a>
    <a className="tag" href="#">Promise</a>
  </div>
);

const Navigation = () => (
  <div className="article-navigation col-sm-12 mt-4 mb-4">
    <hr />
      <a className="article-navigation-left" href="">
        <i className="fa fa-arrow-left"></i> Mới hơn
      </a>
    <a className="article-navigation-right" href="">
      Cũ hơn
      <i className="fa fa-arrow-right" href=""></i>
    </a>
    <hr />
  </div>
);

const Suggest = (props) => (
  <div className="suggest col-sm-12">
    <p>Bài viết hay</p>
    <div className="row">
      {props.children}
    </div>

  </div>
);

Suggest.propTypes = {
  children: PropTypes.node.isRequired,
};

const SuggestItem = (props) => (
  <div className="col-sm-6 card flex-md-row mb-1 box-shadow h-md-250">
    <div className="row">
      <div className="col-sm-4" style={props.resizePadding}>
        <img className="card-img-right flex-auto d-none d-lg-block"
             src="./img/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" />
      </div>
      <div className="col-sm-8" style={props.resizePadding}>
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="title">
            <a className="text-dark" href="#">Featured post</a>
          </h3>
          <p className="card-text mb-auto ">This is a wider card with supporting text below as a natural lead-in to
            additional content.</p>
        </div>
      </div>
    </div>
  </div>
);

SuggestItem.propTypes = {
  resizePadding: PropTypes.exact().isRequired,
};

// const FacebookComments = () => (
//     <FacebookProvider appId="2077250975839277">
//       <Comments href="https://www.facebook.com/permalink.php?story_fbid=191243321677734&id=140503326751734" />
//     </FacebookProvider>
// );

// const ArticleContent = props => (
//   <div className="article col-sm-12">
//     {props.children}
//   </div>
// );

// ArticleContent.propsTypes = {
//   children: PropTypes.node.isRequired,
// };
const defaultProps = {
  title: ARTICLE.TITLE,
  author: ARTICLE.AUTHOR,
  content: ARTICLE.CONTENT,
  created: ARTICLE.CREATED,
};

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

const Article = ({
  title,
  author,
  content,
  created,
}) => (
      <div>
        <ArticleContent>
          <ArticleHeader />
          <ArticleContent content={content} />
        </ArticleContent>
        <Share />
        <Tag />
        <Navigation />
        <Suggest >
          <SuggestItem resizePadding={{ padding: 0 }} />
          <SuggestItem resizePadding={{ padding: 0 }} />
          <SuggestItem resizePadding={{ padding: 0 }} />
          <SuggestItem resizePadding={{ padding: 0 }} />
        </Suggest>
      </div>
);

Article.defaultProps = defaultProps;
Article.propTypes = propTypes;
export default Article;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from '../components/Article';
import { fetchArticleIfNeed } from '../actions/ArticleActions';

const propTypes = {
  article: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class ArticleContainer extends Component {
  componentDidMount() {
    const url = this.props.location;
    console.log('query', url);
    const { dispatch } = this.props;
    dispatch(fetchArticleIfNeed('5aebe2fe96534000264feed6'));
  }

  render() {
    const { article, isFetching } = this.props;
    const isEmpty = article;
    console.log(this.props);
    return (
      isEmpty
        ? (isFetching ? <h2>Loading...</h2> : <h2>Empty</h2>)
        : <Article article={article} />
    );
  }
}

const mapStateToProps = (state) => {
  const { articleId, articleByPayload } = state;
  const {
    isFetching,
    lastUpdate,
    data: article,
  } = articleByPayload[articleId] || {
    isFetching: true,
    data: {},
  };
  return {
    article,
    isFetching,
    lastUpdate,
  };
};

ArticleContainer.propTypes = propTypes;
export default connect(mapStateToProps)(ArticleContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleList from '../components/ArticleList';
import { fetchAllArticleIfNeed } from '../actions/ArticleListActions';

const propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllArticleIfNeed());
  }

  // componentWillReceiveProps(nextProps) {
  //   const { dispatch } = nextProps;
  //   dispatch(getArticleWithRedux());
  // }

  render() {
    const { articleList, isFetching } = this.props;
    const isEmpty = articleList.length === 0;
    return (
      <div>
        {
          isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty</h2>)
          : <ArticleList articleList={articleList} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { allArticleByPayload } = state;
  const {
    isFetching,
    lastUpdated,
    items: articleList,
  } = allArticleByPayload.reactjs || {
    isFetching: true,
    items: [],
  };
  return {
    articleList,
    isFetching,
    lastUpdated,
  };
};

App.propTypes = propTypes;
export default connect(mapStateToProps)(App);

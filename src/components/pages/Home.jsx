import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Layout from '../layout/App';
import ArticleList from '../../containers/ArticleListContainer';

const HomeContent = props => (
  <div className="col-sm-12">
    {props.children}
  </div>
);

const Home = () => (
  <HomeContent>
    <ArticleList />
  </HomeContent>
);

HomeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;

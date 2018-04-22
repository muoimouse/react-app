import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Layout from '../layout/App';
// import { listArticle } from '../../containers';

const Post = props => (
  <div className="card flex-md-row mb-1 box-shadow h-md-250">
    <div className="row">
      <div className="col-sm-4" style={props.styleImg}>
        <img className="card-img-right flex-auto d-none d-lg-block" src="./img/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" />
      </div>
      <div className="col-sm-8">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            <a className="text-dark" href="#">Tại sao không nên lưu trữ data user trên Local Storage?</a>
          </h3>
          <div className="mb-0 text-muted">
            <i className="post-time">November 07, 2016</i>
          </div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
            lead-in to additional content.</p>
          <i> <a href="./post">Continue reading</a> </i>
          <div className="entry-meta">
            <a href="" className="fa fa-user"> Mouse</a>
            <a href="" className="fa fa-folder-open"> JavaScript</a>
            <a href="" className="fa fa-comment"> 8 phản hồi</a>
            <a href="" className="fa fa-clock-o"> 04/20/2018</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  styleImg: PropTypes.string.isRequired,
};

const HomeContent = props => (
  <div className="col-sm-12">
    {props.children}
  </div>
);

class Home extends Component {
  render() {
    return (
      <Layout>
        <HomeContent>
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
          <Post styleImg={{ padding: 0 }} />
        </HomeContent>
      </Layout>
    );
  }
}

HomeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;

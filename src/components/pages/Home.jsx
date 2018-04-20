import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Layout from '../layout/App';
// import { listArticle } from '../../containers';

const Post = () => (
  <div className="card flex-md-row mb-1 box-shadow h-md-250">
    <img className="card-img-right flex-auto d-none d-lg-block" src="./img/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" />
      <div className="card-body d-flex flex-column align-items-start">
        <h3 className="mb-0">
          <a className="text-dark" href="#">Featured post</a>
        </h3>
        <div className="mb-1 text-muted">
          <span>November 07, 2016</span>
        </div>
        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
          lead-in to additional content.</p>
        <a href="./post.html">Continue reading</a>
        <div className="entry-meta">
          <a href="" className="fa fa-user"> Mouse</a>
          <a href="" className="fa fa-folder-open"> JavaScript</a>
          <a href="" className="fa fa-comment"> 8 phản hồi</a>
          <a href="" className="fa fa-clock-o"> 04/20/2018</a>
        </div>
      </div>
  </div>
);

class Content extends Component{
  render() {
    return (
      <div className="content container-fluid p-0">
        <div className="post-container col-sm-8">
          <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className=" container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  {this.props.children}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

class Home extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <Post />
        </Content>
      </Layout>
    );
  }
}

export default Home;

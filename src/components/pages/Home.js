import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/App';
import { listArticle } from '../../containers';

class Post extends React.Component {
  render() {
    return (
      <div className="card mb-4">
        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Reiciendis aliquid atque, nulla?
            Quos cum ex quis soluta, a laboriosam.
            Dicta expedita corporis animi vero voluptate voluptatibus possimus,
            veniam magni quis!
          </p>
          <Link to="/post" className="btn btn-primary">Read More &rarr;</Link>
        </div>
        <div className="card-footer text-muted">
          Posted on January 1, 2017 by
          <a href="#">Start Bootstrap</a>
        </div>
      </div>
    );
  }
}

class Pagination extends React.Component {
  render() {
    return (
      <ul className="pagination justify-content-center mb-4">
        <li className="page-item">
          <Link className="page-link" to="#">&larr; Older</Link>
        </li>
        <li className="page-item disabled">
          <Link className="page-link" to="#">Newer &rarr;</Link>
        </li>
      </ul>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
        <Pagination/>
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArticle: listArticle()
    };
  }

  render() {
    console.log(this.state.listArticle)
    return (
      <Layout>
        <div>
          ahiha
        </div>
        <Content/>
      </Layout>
    );
  }
}

export default Home;

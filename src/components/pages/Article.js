import * as React from 'react';
import Layout from '../layout/App';
import { FormInput, FormContent } from '../forms/CommentForm';

class ArticleHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mt-4">Post Title</h1>
        <p className="lead">
          by
          <a href="#">Start Bootstrap</a>
        </p>
        <hr/>
        <p>Posted on January 1, 2018 at 12:00 PM</p>
        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
        <hr/>
      </div>
    );
  }
}

class ArticleContent extends React.Component {
  render() {
    return (
      <p>This is content</p>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <Layout>
        <ArticleHeader/>
        <ArticleContent/>
        <FormInput/>
        <FormContent>
          <FormContent/>
        </FormContent>
      </Layout>
    );
  }
}

export default Post;

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class SearchWidget extends React.Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn" />
            <button className="btn btn-info" type="button" >
              <i className="fa fa-search" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class CategoryWidgetChildren extends React.Component {
  render() {
    return (
      <ul className="list-unstyled mb-0">
        <li>
          <a href="#">Web Design</a>
        </li>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">Freebies</a>
        </li>
      </ul>
    );
  }
}

class CategoryWidget extends React.Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <CategoryWidgetChildren/>
            </div>
            <div className="col-lg-6">
              <CategoryWidgetChildren/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TagWidget extends React.Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Tag</h5>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
        </div>
      </div>
    );
  }
}

class Widget extends React.Component {
  render() {
    return (
      <div>
        <SearchWidget/>
        <CategoryWidget/>
        <TagWidget/>
      </div>
    );
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {this.props.children}
            </div>
            <div className="col-md-4">
              <Widget/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

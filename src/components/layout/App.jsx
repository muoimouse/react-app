import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Header from './Header';

const LayoutContent = (props) => (
  <div className="content container-fluid p-0">
    <div className="post-container col-sm-8">
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className=" container-fluid">
          <div className="row">
              {props.children}
          </div>
        </div>
      </section>
    </div>
  </div>
);

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <LayoutContent>
          {this.props.children}
        </LayoutContent>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

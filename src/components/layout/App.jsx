import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

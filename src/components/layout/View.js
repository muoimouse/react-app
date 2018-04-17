import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Counter {this.props.counter}</div>
    );
  }
}

View.propTypes = {
  counter: PropTypes.number
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, null)(View);
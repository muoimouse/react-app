import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const FormInput = () => (
  <div className="card my-4">
    <h5 className="card-header">Leave a Comment:</h5>
    <div className="card-body">
      <form>
        <div className="form-group">
          <textarea className="form-control" />
        </div>
        <button ype="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);

class FormContent extends PureComponent {
  render() {
    return (
      <div className="media mb-4">
        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
        <div className="media-body">
          <h5 className="mt-0">Commenter Name</h5>
          Cras sit amet nibh libero, in gravida nulla.
          Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
          {this.props.children}
        </div>
      </div>
    );
  }
}

FormContent.propTypes = propTypes;

export {
  FormInput,
  FormContent,
};

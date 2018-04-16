import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.res/Header.css';
import { connect } from 'react-redux';
// import store from '../../store';
import { INCREASE } from '../../constants/actionTypes';
// import counter from '../../reducers/counterReducer';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

// class NavItem extends React.Component<HeaderLink, HeaderLink> {
//   constructor(props: HeaderLink) {
//     super(props);
//   }
//
//   render() {
//     return (
//         <Link className={`${this.props.className}`} to={`${this.props.href}`}>{this.props.value}</Link>
//     );
//   }
// }

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.counter);
    return (
      <div>{this.props.counter}</div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  increment() {
    this.props.dispatch({ type: INCREASE });
  }
  render() {
    return (
      <div className="header-text">
        <div className="col-lg-4 offset-lg-4">
          <img className="header-img" src="./mouse.jpg" alt=""/>
          <h1>Mouse</h1>
          <hr/>
          <p>Software engineer, blogger at @Mouse</p>
        </div>
        <div className="menu-socials">
          <ul className="nav">
            <li className="presentation"><Link to="/"><i className="fab fa-facebook"/></Link></li>
            <li className="presentation"><Link to="/"><i className="fab fa-twitter"/></Link></li>
            <li className="presentation"><Link to="/"><i className="fab fa-github-square"/></Link></li>
            <li className="presentation"><Link to="/"><i className="fab fa-linkedin"/></Link></li>
          </ul>
          <button className="btn" onClick={this.increment}>INSREASE</button>
          <View/>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

connect (mapStateToProps, null)(View);
export default connect(null, actions)(Header);

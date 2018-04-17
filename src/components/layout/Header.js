import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.res/Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import View from './View';

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

class Header extends React.Component {
  constructor(props) {
    super(props);
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
        </div>
        <button onClick={this.props.counterIncrease}>Increase</button>
        <View/>
      </div>
    );
  }
}

Header.propTypes = {
  counterIncrease: PropTypes.func
};

export default connect(null, actions)(Header);

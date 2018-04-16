import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.res/Header.css';
import { Provider, connect } from 'react-redux';
import store from '../../stores';
import { INCREASE } from '../../constants/actionTypes';
import counter from '../../reducers/counterReducer';
import PropTypes from 'prop-types';

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

  increment() {
    this.props.dispatch({ type: INCREASE });
  }
  render() {
    return (
      <Provider store={store}>
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
            <button className="btn" onClick={this.increment}></button>
          </div>
        </div>
      </Provider>
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


export default connect(mapStateToProps)(Header);

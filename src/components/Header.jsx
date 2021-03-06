import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" >
    <Link className="navbar-brand js-scroll-trigger" to="/">
      <span className="d-block d-lg-none">Mouse</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
      </span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <input className="search" type="text" placeholder=" search" />
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>
      </ul>
    </div>
  </nav>
);


class Header extends PureComponent {
  render() {
    return (
      <Profile />
    );
  }
}

export default (Header);

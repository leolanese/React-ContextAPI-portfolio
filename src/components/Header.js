import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Contacts from "./Contacts";
import About from "./About";

const Header = (props) => {
  const { title } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-secondary justify-content-center mb-3 py-0 ">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contacts">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white"  to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

Header.defaultProps = {
  title: 'Leo Lanese - Portfolio (React + ContextAPI)'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

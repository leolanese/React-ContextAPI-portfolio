import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Contacts from "./Contacts";
import About from "./About";

const Header = (props) => {
  const { title } = props;

  return (
    <Router>
        <nav className="navbar navbar-expand-sm bg-light justify-content-center mb-3 py-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">Contacts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/contacts" >
          <Contacts />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
    </Router>
  )
};

Header.defaultProps = {
  title: 'Leo Lanese - Portfolio (React + ContextAPI)'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

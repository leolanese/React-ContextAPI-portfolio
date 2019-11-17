import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center mb-3 py-0">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 3</a>
        </li>
      </ul>
    </nav>
  )
}

Header.defaultProps = {
  title: 'My app'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
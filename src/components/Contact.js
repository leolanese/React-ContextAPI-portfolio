import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// class component
class Contact extends Component {
  render() {

    const { contact } = this.props;
    const element = <FontAwesomeIcon icon={faCoffee} />

    return (
      <div className="card card-body mb-3" >
        <h3>{contact.name}</h3>

          <FontAwesomeIcon icon="coffee" />

        <ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.location}</li>
        </ul>
      </div>
    )
  }
}

Contact.defaultProps = {
  name: 'Leo Lanese',
  email: 'developer@leolanese.com',
  location: 'London',
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact

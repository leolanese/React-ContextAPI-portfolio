import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css.css'

// class component
class Contact extends Component {
  render() {

    const { contact } = this.props;

    return (
      <div className="card card-body mb-3" >
        <h3>{contact.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.location}</li>
        </ul>
      </div>
    )
  }
}

Contact.defaultProps = {
  name: 'My name',
  email: 'My email',
  location: 'My location',
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact
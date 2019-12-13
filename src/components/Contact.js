import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faReact, faAngular, faJs } from '@fortawesome/free-brands-svg-icons'

// class component
class Contact extends Component {
  state = {};

  // custom new method()
  // using
  onShowClick = (id, e) => {
    console.log(id);
    console.log(e);
    console.log(e.target); // element
  };

  render() {

    const { contact } = this.props;

    return (
      <div className="card card-body mb-3" >
          <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          <FontAwesomeIcon icon={faAngular} color="#b13138" />
          <FontAwesomeIcon icon={faJs} color="#f7df1e" />

          <h3>
            {contact.name}
            <FontAwesomeIcon
              icon={faSortDown}
              color="#000"
              onClick={ this.onShowClick.bind(this, contact.id)  }
          /></h3>

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

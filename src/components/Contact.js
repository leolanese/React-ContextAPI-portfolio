import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faSortDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAngular, faJs } from '@fortawesome/free-brands-svg-icons';

import { Consumer} from './../context';
import axios from 'axios';

// class component
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  componentDidMount() {
    console.log('Contact > componentDidMount');
  };

  stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  // custom new method()
  onShowClick = (id, e) => {
    // state immutable: use setState()
    this.setState({showContactInfo: !this.state.showContactInfo});
    console.log('onShowClick: ', 'id:' , id, 'event:', e);
    e.stopPropagation();
  };

  onDeleteClick = async (id, dispatch, e) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/{$id}`);
    dispatch({type: 'DELETE_CONTACT', payload: id});
    e.stopPropagation();
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo  } = this.state;

    return (
      <Consumer>

        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3" >
              <span>
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                <FontAwesomeIcon icon={faAngular} color="#b13138" />
                <FontAwesomeIcon icon={faJs} color="#f7df1e" />
                {contact.company}{' '}

                <FontAwesomeIcon
                  icon={faSortDown}
                  onClick={this.onShowClick.bind(this, contact.id) }
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    marginRight: '1rem',
                    fontSize: '2em',
                    top: '-5px',
                    position: 'relative'
                  }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="delete-icon"
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#922626',
                    marginRight: '1rem'
                  }}
                />

              { showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.role}</li>
                  <li className="list-group-item">{contact.date}{contact.country}</li>
                  <li className="list-group-item">{contact.description}</li>
                </ul>
              ) : null}
              </span>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.defaultProps = {
  name: 'Leo Lanese',
  email: 'developer@leolanese.com',
  location: 'London',
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact

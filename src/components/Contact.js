import React, { Component } from 'react';
import PropTypes from 'prop-types';

// loading  CSS Modules
import './contact.css'

// loading json
import * as json from "./../resources/json.json";

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

  componentDidMount () {
    console.log('component did mount');
  }

  // custom new method()
  onShowClick = (id, e) => {
    // state immutable: use setState()
    this.setState({showContactInfo: !this.state.showContactInfo});
    console.log(id);
    console.log(id);
    console.log(e);
    console.log(); // element
  };

  onDeleteClick = (id, dispatch) => {
    // JSONPlaceholder mock
    // API calls: http.delete() request make the front-end part and mocking the back end
    console.log('Child Contact Component > onDeleteClick');
    // adding props
    // this.props.deleteClickHandler();
    axios.delete(`https://jsonplaceholder.typicode.com/users/{$id}`)
      .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))
  };

  render() {
    console.log(`Reading JSON file: ${json[0].name}`);
    // destructuring
    const { contact } = this.props;
    const { showContactInfo  } = this.state;

    return (
      <Consumer>

        {value => {
          const {dispatch} = value;

          return (
            <div className="card card-body mb-3" >
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
              <FontAwesomeIcon icon={faAngular} color="#b13138" />
              <FontAwesomeIcon icon={faJs} color="#f7df1e" />
              <h3>
                {contact.name}{' '}
                <FontAwesomeIcon
                  icon={faSortDown}
                  color="#000"
                  onClick={this.onShowClick.bind(this, contact.id) }
                  style={{cursor: 'pointer'}}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="delete-icon"
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch) }
                />
              </h3>
              { showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.email}</li>
                  <li className="list-group-item">{contact.username}</li>
                </ul>
              ) : null}
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
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact

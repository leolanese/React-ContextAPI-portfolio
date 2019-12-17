import React, { Component } from 'react'
import Contact from './Contact';

import { Consumer } from './../context'

class Contacts extends Component {
  // local component state
  // state = {
  //
  // };

  // deleteContact = (id) => {
  //   // now we have access to the parent and access to the State in the single component
  //   console.log('Parent Contants Component > deleteContact');
  //
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(
  //       contact => contact.id !== id
  //   );
  //   this.setState({
  //     contacts: newContacts
  //   });
  //
  // };

  render() {
    // destructuring: pull out date from the state
    // const { contacts } = this.state;
    return (
      <Consumer>
        {value => {
          const { contacts } = value; // State. We only take contacts
          return (
            // looping thougth the state
            <React.Fragment>
              {
                contacts.map(data => (
                  // Reusable Contant Component
                  <Contact
                    key={data.id}
                    contact={data}
                    // deleteClickHandler={this.deleteContact.bind(this, data.id) }
                  />
                ))
              }
            </React.Fragment>
          )
        }}
      </Consumer>
    );
    console.log('Latest copy immutable State' + JSON.stringify(this.state));
  }
}
export default Contacts;

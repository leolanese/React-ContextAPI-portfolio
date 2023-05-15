import React, { Component } from 'react'
import Contact from './Contact';

import { Consumer } from './../context'

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value; // State. We only take contacts

          return (
            // looping thougth the state
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-info">Portfolio</span> Leo Lanese
              </h1>
              {
                contacts.map(data => (
                  // Reusable Contant Component
                  <Contact
                    key={data.id}
                    contact={data}
                    // deleteClickHandler={this.deleteContact.bind(this, data.id) }
                  />
                ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
    console.log('Latest copy immutable State' + JSON.stringify(this.state));
  }
}
export default Contacts;

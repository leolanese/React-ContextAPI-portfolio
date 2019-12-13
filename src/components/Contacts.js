import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  // state for this component
  state = {
      contacts: [
        {
          id: 1,
          name: 'Accuity',
          email: 'ClientId@email.com',
          location: 'ClientId'
        },
        {
          id: 2,
          name: 'Mimecast',
          email: 'ClientId@email.com',
          location: 'SiteCollectionTestUrl',
        },
        {
          id: 3,
          name: 'Tenant DomainUrl',
          email: 'ClientId@email.com',
          location: 'TenantDomainUrl',
        }
      ]
    };

  render() {
    // destructuring: pull out date from the state
    const { contacts } = this.state;

    return (
        // looping thougth the state
      <div>
        {
          contacts.map(data => (
            <Contact
              key={data.id}
              contact={data}
            />
          ))
        }
      </div>
    )
  }
}



export default Contacts;

import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: 'Client Id',
          email: 'ClientId@email.com',
          location: 'ClientId'
        },
        {
          id: 2,
          name: 'Site Collection TestUrl',
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
    }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(data => (

          <Contact
            key={data.id}
            contact={data}
          />

        ))}
      </div>
    )
  }
}



export default Contacts;
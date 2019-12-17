// store
import React, {Component} from 'react';

const Context = React.createContext();

// reducer
const reducer = (state, action) => {
  switch(action.type) {
      case 'DELETE_CONTACT':
          return {
              ...state,
              contacts: state.contacts.filter(contact => contact.id !== action.payload)
          };
          default:
              return state;
  }
};

// global state: we have a provider and we have a Consumer
export class Provider extends Component {
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
        ],
        dispatch: action => this.setState (state => reducer (state, action))
    };

    render () {
        // value that holds the State
        return (
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

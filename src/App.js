import React from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Header from './components/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

// App is like the meeting place for all Components
function App() {
  // adding import to fontAwesome library
  library.add(fab, fas, far);

  return (
    <div className="App">

      <Header
        title="Contact xxx"
      />

      <div className="container">
        <Contacts
          name="Leo Lanese"
          email="developer@leolanese.com"
          location="London"
        />
      </div>

    </div>
  );
}

export default App;

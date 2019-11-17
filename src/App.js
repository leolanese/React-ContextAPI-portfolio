import React from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Header from './components/Header';

// App is like the meeting place for all Components
function App() {

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

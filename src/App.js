// New one from start

import React, { Component } from 'react';

import Login from './pages/Login';
import './App.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Routes } from './components/index';
import './App.css';

class App extends Component {
  renderRoutes = () => {
    return (
      <Routes />
    );
  }

  render() {
    return (
      <>
        {this.renderRoutes()}
      </>
    );
  }
}

export default App;

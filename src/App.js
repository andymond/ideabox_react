import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewIdeaForm from './components/NewIdeaForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Idear Box</h1>
        </header>
        <NewIdeaForm />
        <p className="App-intro">
          Enter an idea to remember fool!
        </p>
      </div>
    );
  }
}

export default App;

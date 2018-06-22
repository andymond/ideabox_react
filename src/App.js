import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewIdeaForm from './components/NewIdeaForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Idear Box</h1>
        </header>
        <NewIdeaForm addIdea={this.addIdea}/>
        <p className="App-intro">
          Enter an idea to remember fool!
        </p>
      </div>
    );
  }
}

export default App;

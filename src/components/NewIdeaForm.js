import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleNameChange(e) {
    const value = e.target.value
    this.setState()
  }

  render() {
    return (
      <form>
        <input name='name' value={ this.state.name } onChange={ this.handleNameChange }/>
        <input name='description' value={ this.state.description } />
        <button>Submit</button>
      </form>
    )
  }
}

export default NewIdeaForm;

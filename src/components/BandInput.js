// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name:''
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleOnChange(e)}/>
        <button type='submit' name='name'>Submit</button>
      </form>
      </div>
    )
  }
}

export default BandInput

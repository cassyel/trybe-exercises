import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliquesTwo: 0,
      numeroDeCliquesThree: 0
    }
  }

   handleClick () {
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
  }
  
   handleClickTwo () {
    this.setState((prevState, _props) => ({
      numeroDeCliquesTwo: prevState.numeroDeCliquesTwo + 1
    }))
  }
  
   handleClickThree () {
    this.setState((prevState, _props) => ({
      numeroDeCliquesThree: prevState.numeroDeCliquesThree + 1
    }))
  }

  colorButton (num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
    const {numeroDeCliques, numeroDeCliquesTwo, numeroDeCliquesThree } = this.state
    return (
      <div className='App'>
        <button style={{ backgroundColor: this.colorButton(numeroDeCliques) }} onClick={this.handleClick}>Button 1 | {this.state.numeroDeCliques}</button>
        <button style={{ backgroundColor: this.colorButton(numeroDeCliquesTwo) }} onClick={this.handleClickTwo}>Button 2 | {this.state.numeroDeCliquesTwo}</button>
        <button style={{ backgroundColor: this.colorButton(numeroDeCliquesThree) }} onClick={this.handleClickThree}>Button 3 | {this.state.numeroDeCliquesThree}</button>
      </div>
    )
  }
}

export default App;

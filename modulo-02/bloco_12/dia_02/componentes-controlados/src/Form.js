import React from 'react';
import Textarea from './Textarea'

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textArea: '',
      input1: '',
      input2: '',
      checkbox: false,
      select: '',
    };
  }

    handleChange({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      
      this.setState({
        [name]: value
      });
    }

  render() {
    return (
      <div>
        <form>
          <h1>Form</h1>
          <Textarea value={this.state.textArea} handleChange={this.handleChange}/>
          <input name='input1' type="text" onChange={this.handleChange} value={this.state.input}></input>
          <input name='input2' type="email" onChange={this.handleChange} value={this.state.input2} ></input>
          <input name="checkbox" type="checkbox" onChange={this.handleChange} value={this.state.checkbox}></input>
          <select name='select' onChange={this.handleChange} value={this.state.select}>
            <option value="">Selecione</option>
            <option>01</option>
            <option>02</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  onInputChange = (e) => {
    this.props.handleInputChange(e, this.props.inputName);
  }
  render() {
    return (
      <div className='inputField'>
        <label htmlFor={this.props.inputName} className='inputFieldLabel'> {this.props.inputName} </label>
        <input value={this.props.input} onChange={this.onInputChange} id={this.props.inputName} />
      </div>
    );
  }
}

export default InputField;

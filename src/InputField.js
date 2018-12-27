import React, { Component } from 'react';
import './InputField.css';

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

const makeSet = name => {
  const mySet = new Set();
  for (let i = 0; i < name.length; i++) {
    mySet.add(name[i]);
  }
  return mySet;
}

const hexSet = makeSet(hex);
const base64Set = makeSet(base64);

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input
    }
  }
  onInputChange = (e) => {
    if (e.target.value.length > 0) {
      if (this.props.inputName === 'decimal') {
        if (!parseInt(e.target.value[e.target.value.length - 1])) {
          return;
        }
      } else if (this.props.inputName === 'binary') {
        if (e.target.value[e.target.value.length - 1] !== '0' && e.target.value[e.target.value.length - 1] !== '1') {
          return;
        }
      } else if (this.props.inputName === 'hexadecimal') {
        if (!hexSet.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      } else if (this.props.inputName === 'base64') {
        if (!base64Set.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      }
    }
    this.setState({ input: e.target.value }, () => {
      this.props.calculate(this.state.input);
    })
  }
  render() {
    return (
      <div className='inputField'>
        <label htmlFor={this.props.inputName} className='inputFieldLabel'> {this.props.inputName} </label>
        <input value={this.props.input || this.state.input} onChange={this.onInputChange} id={this.props.inputName} />
      </div>
    );
  }
}

export default InputField;

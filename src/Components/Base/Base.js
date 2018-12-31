import React, { Component } from 'react';
import InputField from '../InputField/InputField';

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
const binary = ['0', '1'];

const makeSet = name => {
  const mySet = new Set();
  for (let i = 0; i < name.length; i++) {
    mySet.add(name[i]);
  }
  return mySet;
}

const hexSet = makeSet(hex);
const base64Set = makeSet(base64);

class Base extends Component {
  constructor() {
    super();
    this.state = {
      decimal: '',
      hexadecimal: '',
      binary: '',
      base64: ''
    }
  }
  handleDecimal = value => {
    this.setState({
      decimal: value,
      hexadecimal: this.props.convertToBase(value, '', 16, hex),
      binary: this.props.convertToBase(value, '', 2, binary),
      base64: this.props.convertToBase(value, '', 64, base64)
    });
  }
  handleHexadecimal = value => {
    const decimalVal = this.props.convertToDecimal(value, 16, hex);
    this.setState({
      decimal: decimalVal,
      hexadecimal: value,
      binary: this.props.convertToBase(decimalVal, '', 2, binary),
      base64: this.props.convertToBase(decimalVal, '', 64, base64)
    });
  }
  handleBinary = value => {
    const decimalVal = this.props.convertToDecimal(value, 2, binary);
    this.setState({
      decimal: decimalVal,
      hexadecimal: this.props.convertToBase(decimalVal, '', 16, hex),
      binary: value,
      base64: this.props.convertToBase(decimalVal, '', 64, base64)
    });
  }
  handleBase64 = value => {
    const decimalVal = this.props.convertToDecimal(value, 64, base64);
    this.setState({
      decimal: decimalVal,
      hexadecimal: this.props.convertToBase(decimalVal, '', 16, hex),
      binary: this.props.convertToBase(decimalVal, '', 2, binary),
      base64: value
    });
  }
  handleInputChange = (e, name) => {

    if (name === 'Decimal') {
      if (e.target.value.length > 0) {
        if (e.target.value[e.target.value.length - 1] !== '0') {
          if (!parseInt(e.target.value[e.target.value.length - 1])) {
            return;
          }
        }
      }
      this.handleDecimal(e.target.value);
    } else if (name === 'Binary') {
      if (e.target.value.length > 0) {
        if (e.target.value[e.target.value.length - 1] !== '0' && e.target.value[e.target.value.length - 1] !== '1') {
          return;
        }
      }
      this.handleBinary(e.target.value);
    } else if (name === 'Hexadecimal') {
      if (e.target.value.length > 0) {
        if (!hexSet.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      }
      this.handleHex(e.target.value);
    } else if (name === 'Base64') {
      if (e.target.value.length > 0) {
        if (!base64Set.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      }
      this.handleBase64(e.target.value);
    }
  }
  render() {
    return (
      <div className="App">
        <br />
        <InputField
          input={this.state.decimal}
          handleInputChange={this.handleInputChange}
          inputName='Decimal'
        />
        <InputField
          input={this.state.hexadecimal}
          handleInputChange={this.handleInputChange}
          inputName='Hexadecimal'
        />
        <InputField
          input={this.state.binary}
          handleInputChange={this.handleInputChange}
          inputName='Binary'
        />
        <InputField
          input={this.state.base64}
          handleInputChange={this.handleInputChange}
          inputName='Base64'
        />
      </div>
    );
  }
}

export default Base;

import React, { Component } from 'react';
import InputField from '../InputField/InputField';

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
const binary = ['0', '1'];

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
  render() {
    return (
      <div className="App">
        <InputField
          input={this.state.decimal}
          calculate={this.handleDecimal}
          inputName='Decimal'
        />
        <InputField
          input={this.state.hexadecimal}
          calculate={this.handleHexadecimal}
          inputName='Hexadecimal'
        />
        <InputField
          input={this.state.binary}
          calculate={this.handleBinary}
          inputName='Binary'
        />
        <InputField
          input={this.state.base64}
          calculate={this.handleBase64}
          inputName='Base64'
        />
      </div>
    );
  }
}

export default Base;

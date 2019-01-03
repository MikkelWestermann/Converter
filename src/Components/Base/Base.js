import React, { Component } from 'react';
import { hex, base64, binary, hexSet, base64Set } from '../../ConversionData';
import InputField from '../InputField/InputField';

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
      this.handleHexadecimal(e.target.value);
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

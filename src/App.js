import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Base from './Components/Base/Base';
import './App.css';

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
const binary = ['0', '1'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'base'
    }
  }
  convertToBase = (value, result, base, baseName) => {
    if (value === '') {
      return '';
    }
    value = parseInt(value);
    const newValue = Math.floor(value / base);
    const remainder = value % base;
    const curResult = baseName[remainder] + result;
    if (newValue >= 1) {
      return this.convertToBase(newValue, curResult, base, baseName);
    } else {
      return curResult;
    }
  }
  convertToDecimal = (value, base, baseName) => {
    if (value === '') {
      return '';
    }
    let newValue = value.toString().split('');
    newValue = newValue.reverse();
    let result = 0;
    newValue.forEach((item, i) => {
      baseName.forEach((char, index) => {
        if (char === item) {
          result += (index * base**i);
        }
      })
    })
    return result;
  }

  handleDecimal = value => {
    this.setState({
      decimal: value,
      hexadecimal: this.convertToBase(value, '', 16, hex),
      binary: this.convertToBase(value, '', 2, binary),
      base64: this.convertToBase(value, '', 64, base64)
    });
  }
  handleHexadecimal = value => {
    const decimalVal = this.convertToDecimal(value, 16, hex);
    this.setState({
      decimal: decimalVal,
      hexadecimal: value,
      binary: this.convertToBase(decimalVal, '', 2, binary),
      base64: this.convertToBase(decimalVal, '', 64, base64)
    });
  }
  handleBinary = value => {
    const decimalVal = this.convertToDecimal(value, 2, binary);
    this.setState({
      decimal: decimalVal,
      hexadecimal: this.convertToBase(decimalVal, '', 16, hex),
      binary: value,
      base64: this.convertToBase(decimalVal, '', 64, base64)
    });
  }
  handleBase64 = value => {
    const decimalVal = this.convertToDecimal(value, 64, base64);
    this.setState({
      decimal: decimalVal,
      hexadecimal: this.convertToBase(decimalVal, '', 16, hex),
      binary: this.convertToBase(decimalVal, '', 2, binary),
      base64: value
    });
  }
  onRouteChange = route => {
    this.setState({ route });
  }
  render() {
    return (
      <div>
        <Header
          from={this.state.route}
          onRouteChange={this.onRouteChange}
        />
        <div className="App">
          {
            this.state.route === 'base'
            &&
            <Base
              convertToBase={this.convertToBase}
              convertToDecimal={this.convertToDecimal}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;

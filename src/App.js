import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Base from './Components/Base/Base';
import Colors from './Components/Colors/Colors';
import Distance from './Components/Distance/Distance';
import './App.css';

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
        <div>
          {
            this.state.route === 'base'
            &&
            <Base
              convertToBase={this.convertToBase}
              convertToDecimal={this.convertToDecimal}
            />
          }
          {
            this.state.route === 'colors'
            &&
            <Colors
              convertToBase={this.convertToBase}
              convertToDecimal={this.convertToDecimal}
            />
          }
          {
            this.state.route === 'distance'
            &&
            <Distance /> 
          }
        </div>
      </div>
    );
  }
}

export default App;

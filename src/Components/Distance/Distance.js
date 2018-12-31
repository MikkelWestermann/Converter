import React, { Component } from 'react';
import InputField from '../InputField/InputField';

class Distance extends Component {
  constructor() {
    super();
    this.state = {
      meter: '',
      kilometer: '',
      centimeter: '',
      millimeter: '',
      micrometer: '',
      nanometer: ''
    }
  }
  convertDistance = (value, constant) => {
    if (value === '') {
      return 0;
    }
    value = parseFloat(value);
    return value * constant;
  }
  handleDistanceChange = (value, name) => {
    let meters;
    switch (name) {
      case 'meter':
        meters = value;
        break;
      case 'kilometer':
        meters = this.convertDistance(value, 1000);
        break;
      case 'centimeter':
        meters = this.convertDistance(value, 0.01)
        break;
      case 'millimeter':
        meters = this.convertDistance(value, 0.001)
        break;
      case 'micrometer':
        meters = this.convertDistance(value, 0.000001)
        break;
      case 'nanometer':
        meters = this.convertDistance(value, 0.000000001)
        break;
      default:
        meters = 0;
    }
    this.setState({
      meter: meters,
      kilometer: meters / 1000,
      centimeter: meters * 100,
      millimeter: meters * 1000,
      micrometer: meters * 1000000,
      nanometer: meters * 1000000000
    })
  }
  handleInputChange = (e, name) => {
    if (e.target.value.length > 0) {
      if (e.target.value[e.target.value.length - 1] !== '0' && e.target.value[e.target.value.length - 1] !== '.') {
        if (!parseInt(e.target.value[e.target.value.length - 1])) {
          return;
        }
      }
    }
    this.handleDistanceChange(e.target.value, name);
  }
  render() {
    return (
      <div className='App'>
        {
          Object.entries(this.state).map(([key, value]) => {
            return (<InputField
              inputName={key}
              key={key}
              input={value}
              handleInputChange={this.handleInputChange}
            />)
          })
        }
      </div>
    );
  }
}

export default Distance;

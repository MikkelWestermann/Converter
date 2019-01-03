import React, { Component } from 'react';
import ColorInput from '../ColorInput/ColorInput';
import { hex } from '../../ConversionData'; 
import './Colors.css'

class Colors extends Component {
  constructor() {
    super();
    this.state = {
      rgb: '',
      hex: '',
      brightness: 'light'
    }
  }
  handleRGB = value => {
    const arr = value.replace(/\s/g, "").split(',');
    if (arr.length > 3) {
      return '';
    }
    let result = '';
    arr.forEach(item => {
      let hexVal = this.props.convertToBase(item, '', 16, hex);
      if (hexVal.length === 1) {
        hexVal = '0' + hexVal;
      }
      result += hexVal;
    })
    return result;
  }
  handleHex = value => {
    const arr = [];
    if (value.length === 3) {
      value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
    }
    for (let i = 0; i < value.length; i += 2) {
      arr.push(value.slice(i, i + 2));
    }
    const convertedVals = arr.map(val => {
      return this.props.convertToDecimal(val, 16, hex);
    })
    if (convertedVals[0] === undefined) {
      return '';
    }
    const result = `${convertedVals[0]}, ${convertedVals[1] || 0}, ${convertedVals[2] || 0}`;
    return result;
  }
  onColorChange = (value, isHex) => {
    if (isHex) {
      this.setState({
        rgb: this.handleHex(value),
        hex: value
      }, () => {
        this.setState({
          brightness: this.getBrightness(this.state.rgb)
        })
      })
    } else {
      this.setState({
        rgb: value,
        hex: this.handleRGB(value)
      }, () => {
        this.setState({
          brightness: this.getBrightness(this.state.rgb)
        })
      })
    }
  }
  getBrightness = rgb => {
    const arr = rgb.replace(/\s/g, "").split(',');
    const nums = arr.map(val => {
      const number = parseInt(val);
      if (number !== undefined && !isNaN(number)) {
        return number;
      } else {
        return 100;
      }
    })
    const avg = nums.reduce((a,b) => a + b, 0) / 3;
    if (avg > 125) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  getValidColor = color => {
    if (color.length === 3 || color.length === 6) {
      return true;
    } else {
      return false
    }
  }
  render() {
    return (
      <div style={{backgroundColor: `#${this.getValidColor(this.state.hex) ? this.state.hex : '339989'}`}} className={`App colors ${this.state.brightness}`}>
        {!this.getValidColor(this.state.hex) ? <h3>Write a Valid Color</h3> : <h3>Color has been Converted</h3>}
        <ColorInput
          change={this.onColorChange}
          isHex={true}
          inputVal={this.state.hex}
          brightness={this.state.brightness}
        />
        <ColorInput
          change={this.onColorChange}
          isHex={false}
          inputVal={this.state.rgb}
          brightness={this.state.brightness}
        />
      </div>
    );
  }
}

export default Colors;

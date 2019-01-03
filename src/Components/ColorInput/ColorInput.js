import React, { Component } from 'react';
import { hexSet, rgbSet } from '../../ConversionData';
import './ColorInput.css';

class ColorInput extends Component {
  onInputChange = e => {
    if (e.target.value.length > 0) {
      if (this.props.isHex) {
        if (!hexSet.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      } else {
        if (!rgbSet.has(e.target.value[e.target.value.length - 1])) {
          return;
        }
      }
    }
    this.props.change(e.target.value, this.props.isHex);
  }
  render() {
    return (
      <div>
        {this.props.isHex ? '#' : 'RGB('}<input className={`colorInput ${this.props.brightness}`} placeholder={this.props.isHex ? '339989' : '51, 153, 137'} onChange={this.onInputChange} value={this.props.inputVal} /> {!this.props.isHex && ')'}
      </div>
    );
  }
}

export default ColorInput;

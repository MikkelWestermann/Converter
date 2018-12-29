import React, { Component } from 'react';
import './ColorInput.css';

class ColorInput extends Component {
  onInputChange = e => {
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

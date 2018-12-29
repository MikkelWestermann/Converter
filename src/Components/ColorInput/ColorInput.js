import React, { Component } from 'react';
import './ColorInput.css';

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const rgb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', ' '];

const makeSet = name => {
  const mySet = new Set();
  for (let i = 0; i < name.length; i++) {
    mySet.add(name[i]);
  }
  return mySet;
}

const hexSet = makeSet(hex);
const rgbSet = makeSet(rgb);

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

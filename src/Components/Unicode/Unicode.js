import React, {Component} from 'react';
import InputField from '../InputField/InputField';
import { data } from './UnicodeData';
import ListItem from '../ListItem/ListItem';
import './Unicode.css';

class Unicode extends Component {
  constructor() {
    super();
    this.state = {
      binary: '',
      unicode: '',
      showList: false
    }
  }
  handleToBinary = (value) => {
    let result = '';
    const chars = value.target.value.split('');
    chars.forEach(char => {
      for (let i = 0; i < data[0].length; i++) {
        if (data[0][i].char === char) {
          result += data[0][i].unicode;
          break;
        }
      }
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].char === char) {
          result += data[1][i].unicode;
          break;
        }
      }
    });
    this.setState({
      binary: result,
      unicode: value.target.value
    })
  }
  handleToUnicode = (value) => {
    let result = '';
    let input = value.target.value.replace(/\s/g, "");
    if (input.length % 8 === 0 && input.length !== 0) {
      const bytes = input.match(/.{1,8}/g);
      for (let i = 0; i < bytes.length; i++) {
        if (bytes[i][0] === '0') {
          for (let j = 0; j < data[0].length; j++) {
            if (bytes[i] === data[0][j].unicode) {
              result += data[0][j].char
            }
          }
        } else if (bytes[i][0] === '1') {
          const twoBytes = bytes[i] + bytes[i + 1];
          for (let j = 0; j < data[1].length; j++) {
            if (twoBytes === data[1][j].unicode) {
              result += data[1][j].char
            }
          }
          i++;
        }
      }
      this.setState({
        binary: value.target.value,
        unicode: result
      })
    } else {
      this.setState({
        binary: value.target.value,
        unicode: ''
      })
    }
  }
  closeList = () => {
    this.setState({
      showList: false
    })
  }
  openList = () => {
    this.setState({
      showList: true
    })
  }
  render() {
    return (
      <div className='App'>
        <br />
        <InputField
          inputName='Binary'
          input={this.state.binary}
          handleInputChange={this.handleToUnicode}
        />
        <InputField
          inputName='Unicode'
          input={this.state.unicode}
          handleInputChange={this.handleToBinary}
        />
        <div className='unicode'>
          {
            this.state.unicode.length === 0
            ?
            <h3>Write Something Valid</h3>
            :
            <h3>Input has been Converted</h3>
          }
          {
            this.state.showList
            ?
            <p onClick={this.closeList}>Close List</p>
            :
            <p onClick={this.openList}>Want a list of characters?</p>
          }
          {
            this.state.showList
            &&
            <div>
              {data[0].map(item => {
                return <ListItem char={item.char} binary={item.unicode} key={item.unicode} />
              })}
              {data[1].map(item => {
                return <ListItem char={item.char} binary={item.unicode} key={item.unicode} />
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Unicode;

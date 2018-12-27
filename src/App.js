import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import './App.css';

import { decimal, hexadecimal, binary, base64 } from './actions';

const mapStateToProps = state => {
  return {
    decimal: state.decimal,
    hexadecimal: state.hexadecimal,
    binary: state.binary,
    base64: state.base64
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDecimal: (value) => dispatch(decimal(value)),
    handleHexadecimal: (value) => dispatch(hexadecimal(value)),
    handleBinary: (value) => dispatch(binary(value)),
    handleBase64: (value) => dispatch(base64(value))
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputField
          input={this.props.decimal}
          calculate={this.props.handleDecimal}
          inputName='decimal'
        />
        <InputField
          input={this.props.hexadecimal}
          calculate={this.props.handleHexadecimal}
          inputName='hexadecimal'
        />
        <InputField
          input={this.props.binary}
          calculate={this.props.handleBinary}
          inputName='binary'
        />
        <InputField
          input={this.props.base64}
          calculate={this.props.handleBase64}
          inputName='base64'
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

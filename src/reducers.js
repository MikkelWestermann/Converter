import {
  CONVERT_FROM_DECIMAL,
  CONVERT_FROM_HEXADECIMAL,
  CONVERT_FROM_BINARY,
  CONVERT_FROM_BASE64
} from './constants';

const initialState = {
  decimal: '',
  hexadecimal: '',
  binary: '',
  base64: ''
}

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
const binary = ['0', '1'];

const convertToBase = (value, result, base, baseName) => {
  if (value === '') {
    return '';
  }
  value = parseInt(value);
  const newValue = Math.floor(value / base);
  const remainder = value % base;
  const curResult = baseName[remainder] + result;
  if (newValue >= 1) {
    return convertToBase(newValue, curResult, base, baseName);
  } else {
    return curResult;
  }
}
const convertToDecimal = (value, base, baseName) => {
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

export const numbers = (state=initialState, action={}) => {
  let decimalVal;
  switch (action.type) {
    case CONVERT_FROM_DECIMAL:
      return Object.assign({}, state, {
        decimal: action.payload,
        hexadecimal: convertToBase(action.payload, '', 16, hex),
        binary: convertToBase(action.payload, '', 2, binary),
        base64: convertToBase(action.payload, '', 64, base64)
      })
    case CONVERT_FROM_HEXADECIMAL:
      decimalVal = convertToDecimal(action.payload, 16, hex);
      return Object.assign({}, state, {
        decimal: decimalVal,
        hexadecimal: action.payload,
        binary: convertToBase(decimalVal, '', 2, binary),
        base64: convertToBase(decimalVal, '', 64, base64)
      })
    case CONVERT_FROM_BINARY:
      decimalVal = convertToDecimal(action.payload, 2, binary);
      return Object.assign({}, state, {
        decimal: decimalVal,
        hexadecimal: convertToBase(decimalVal, '', 16, hex),
        binary: action.payload,
        base64: convertToBase(decimalVal, '', 64, base64)
      })
    case CONVERT_FROM_BASE64:
      decimalVal = convertToDecimal(action.payload, 64, base64);
      return Object.assign({}, state, {
        decimal: decimalVal,
        hexadecimal: convertToBase(decimalVal, '', 16, hex),
        binary: convertToBase(decimalVal, '', 2, binary),
        base64: action.payload
      })
    default:
      return state;
  }
}

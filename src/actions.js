import {
  CONVERT_FROM_DECIMAL,
  CONVERT_FROM_HEXADECIMAL,
  CONVERT_FROM_BINARY,
  CONVERT_FROM_BASE64
} from './constants';

export const decimal = value => ({
  type: CONVERT_FROM_DECIMAL,
  payload: value
})

export const hexadecimal = value => ({
  type: CONVERT_FROM_HEXADECIMAL,
  payload: value
})

export const binary = value => ({
  type: CONVERT_FROM_BINARY,
  payload: value
})

export const base64 = value => ({
  type: CONVERT_FROM_BASE64,
  payload: value
})

// Conversion of Data functions
const makeSet = name => {
  const mySet = new Set();
  for (let i = 0; i < name.length; i++) {
    mySet.add(name[i]);
  }
  return mySet;
}

// Base Stuff
export const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
export const base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
export const binary = ['0', '1'];
export const hexSet = makeSet(hex);
export const base64Set = makeSet(base64);

// Color Stuff
const rgb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', ' '];
export const rgbSet = makeSet(rgb);

// Input Check

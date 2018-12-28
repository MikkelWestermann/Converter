import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className='header'>
      <h1>Converter</h1>
      <h2>Convert <span>{props.from}</span></h2>
    </div>
  );
}

export default Header;

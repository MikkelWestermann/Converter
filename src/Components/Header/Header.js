import React from 'react';
import Navigator from '../Navigator/Navigator';
import './Header.css';

const Header = props => {
  return (
    <div>
      <div className='header'>
        <h1>Converter</h1>
        <h2>Convert <span>{props.from}</span></h2>
      </div>
      <Navigator onRouteChange={props.onRouteChange} />
    </div>
  );
}

export default Header;

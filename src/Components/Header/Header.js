import React from 'react';
import Navigator from '../Navigator/Navigator';
import './Header.css';

const Header = ({ from, route, onRouteChange }) => {
  return (
    <div>
      <div className='header'>
        <h1>Converter</h1>
        <h2>Convert <span>{from}</span></h2>
      </div>
      <Navigator onRouteChange={onRouteChange} route={route} />
    </div>
  );
}

export default Header;

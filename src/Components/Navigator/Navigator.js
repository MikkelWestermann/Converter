import React, { Component } from 'react';
import './Navigator.css';

class Navigator extends Component {
  render() {
    return (
      <nav>
        <div className='one'>
          <div className='navLinks' onClick={() => this.props.onRouteChange('base')}>Base</div>
        </div>
        <div className='two'>
          <div className='navLinks' onClick={() => this.props.onRouteChange('colors')}>Colors</div>
        </div>
        <div className='three'>
          <div className='navLinks' onClick={() => this.props.onRouteChange('distance')}>Distance</div>
        </div>
      </nav>
    );
  }
}

export default Navigator;

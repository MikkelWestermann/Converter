import React, { Component } from 'react';
import './Navigator.css';

class Navigator extends Component {
  render() {
    return (
      <nav>
        <div className='one'>
          <div className={`navLinks ${this.props.route === 'base' && 'active'}`} onClick={() => this.props.onRouteChange('base')}>Base</div>
        </div>
        <div className='two'>
          <div className={`navLinks ${this.props.route === 'colors' && 'active'}`} onClick={() => this.props.onRouteChange('colors')}>Colors</div>
        </div>
        <div className='three'>
          <div className={`navLinks ${this.props.route === 'distance' && 'active'}`} onClick={() => this.props.onRouteChange('distance')}>Distance</div>
        </div>
        <div className='four'>
          <div className={`navLinks ${this.props.route === 'unicode' && 'active'}`} onClick={() => this.props.onRouteChange('unicode')}>Unicode</div>
        </div>
      </nav>
    );
  }
}

export default Navigator;

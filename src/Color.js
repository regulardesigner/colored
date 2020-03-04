import React from 'react';
import Utils from './utils';

const Color = (props) => {
  const { hex, border } = props;
  return(
    <div className="saved-color" style={{ backgroundColor: '#'+hex, borderColor: border ? 'transparent' : Utils.calculateHue(hex) }}>
      <span style={{ color: Utils.calculateHue(hex) }}>#{hex}</span>
    </div>
  )
}

export default Color;
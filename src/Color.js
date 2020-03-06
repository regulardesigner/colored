import React from 'react';
import Utils from './utils';
import { FaRegCopy } from 'react-icons/fa';

const Color = (props) => {
  const { hex, border } = props;
  return(
    <div className="saved-color" style={{ backgroundColor: '#'+hex, borderColor: border ? 'transparent' : Utils.calculateHue(hex) }}>
      <span style={{ color: Utils.calculateHue(hex) }}>#{hex}</span>
      <button className="saved-color-to-clipboard" title="Copy to clipboard" style={{ color: Utils.calculateHue(hex) }} onClick={Utils.copyToClipboard('#'+hex)}><FaRegCopy /></button>
    </div>
  )
}

export default Color;
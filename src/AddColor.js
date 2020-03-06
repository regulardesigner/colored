import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import Utils from './utils';
import { ColorsContext } from './Contexts/ColorsContext';

const Color = (props) => {
  const { hex, border } = props;
  const { colors, setColors, bckColor, setBckColor } = useContext(ColorsContext);
  const handleSaveColor = () => {
    setColors([...colors, hex]);
    setBckColor(Utils.randomColor());
  }
  return (
    <div className="saved-color" style={{ backgroundColor: '#' + hex, borderColor: border ? 'transparent' : Utils.calculateHue(hex) }}>
      <span style={{ color: Utils.calculateHue(hex) }}>#{hex}</span>
      <button
        className="saved-color--add-button"
        style={{ color: `#${hex}`, backgroundColor: Utils.calculateHue(hex) }}
        onClick={handleSaveColor}
      >
        ADD
      </button>
    </div>
  )
}

export default Color;
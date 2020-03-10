import React, { useContext } from 'react';
import { ColorsContext } from './Contexts/ColorsContext';
import Utils from './utils';
import { FaRegCopy, FaTrashAlt } from 'react-icons/fa';

const Color = (props) => {
  const { hex, border } = props;
  const { colors, setColors, themeColorsLimite ,setAddButtonStatus } = useContext(ColorsContext);

  const handleRemove = () => {
    const remove = colors.filter(color => color !== hex);
    setColors(remove);
    colors.length <= themeColorsLimite+1 ? setAddButtonStatus(false) : setAddButtonStatus(true);
  }

  return (
    <div className="saved-color" style={{ backgroundColor: '#' + hex, borderColor: border ? 'transparent' : Utils.calculateHue(hex) }}>
      <span style={{ color: Utils.calculateHue(hex) }}>#{hex}</span>
      <button
        className="saved-color-button clipboard"
        title="Copy to clipboard"
        style={{ color: Utils.calculateHue(hex) }}
        onClick={(() => Utils.copyToClipboard('#' + hex))}>
        <FaRegCopy />
      </button>
      <button
        className="saved-color-button remove"
        title="Remove the color"
        style={{ color: Utils.calculateHue(hex) }}
        onClick={handleRemove}>
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default Color;
import React, { useState } from 'react';
import { FaRedoAlt, FaArrowAltCircleDown } from 'react-icons/fa';

import Utils from './utils';
import { ColorsContext } from './Contexts/ColorsContext';
import './App.css';

import Color from './Color';
import AddColor from './AddColor';

const App = () => {
  let [ bckColor, setBckColor ] = useState(Utils.randomColor())
  
  let [ colors, setColors ] = useState([]);

  const handleColorChange = (event) => {
    setBckColor(event.target.value)
    Utils.calculateHue(event.target.value)
  }

  const refreshColor = (event) => {
    event.preventDefault();
    setBckColor(Utils.randomColor());
  }

  const ColorPalette = () => {
    return (
      <div className="app-color-palette">
        { colors.map((color, index) => <Color key={index} hex={color} border={'none'} /> ) }
        { colors.length <= 4 && <AddColor hex={bckColor} /> }
      </div>
    )
  }

  return (
  <ColorsContext.Provider value={{ colors, setColors, bckColor, setBckColor }}>
    <div className="app" style={{ backgroundColor: '#'+bckColor }}>
      <div className="app-color" style={{ color: Utils.calculateHue(bckColor) }}>
        #<input style={{ display: 'inline-block', color: Utils.calculateHue(bckColor) }} type="text" value={bckColor} onChange={handleColorChange}/>
      </div>
      <div className="app-info">
        <a
          className={`app-info--random-color ${Utils.calculateHue(bckColor)}`}
          style={{ color: Utils.calculateHue(bckColor) }} 
          href="#random" 
          onClick={refreshColor}
        ><FaRedoAlt /> Give me another color
        </a>
      </div>
      <div 
        className="instruction"
        style={{
          position: 'absolute',
          bottom: '80px',
          color: Utils.calculateHue(bckColor)
        }}>
        <p style={{ fontSize: '.05em' }}>Save your favorite colors here.</p>
      </div>
      <ColorPalette />
    </div>
  </ColorsContext.Provider>
  );
}

export default App;

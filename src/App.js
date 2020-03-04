import React, { useState } from 'react';

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

  return (
  <ColorsContext.Provider value={{ colors, setColors, bckColor, setBckColor }}>
    <div className="app" style={{ backgroundColor: '#'+bckColor }}>
      <div className="app-color" style={{ color: Utils.calculateHue(bckColor) }}>
        #<input style={{ display: 'inline-block', color: Utils.calculateHue(bckColor) }} type="text" value={bckColor} onChange={handleColorChange}/>
      </div>
      <div className="app-info">
        <p
          style={
            { color: Utils.calculateHue(bckColor),
              fontWeight: '100' 
            }
          }
        >
          <span
            role='img'
            aria-label='yarn ball'
          >🧶</span>
          <a
            style={{ color: 'inherit' }} 
            href="#random" 
            onClick={refreshColor}
          >Discover another random color.
          </a>
        </p>
      </div>
      <div className="app-color-palette">
        { colors.map((color, index) => <Color key={index} hex={color} border={'none'} /> ) }
        <AddColor hex={bckColor} />
      </div>
    </div>
  </ColorsContext.Provider>
  );
}

export default App;

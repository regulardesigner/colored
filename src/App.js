import React, { useState } from 'react';
import './App.css';

const randomColor = () => {
  const pickInBetween = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  
  const getRandom = () => {
    return Math.floor(Math.random() * pickInBetween.length);
  }
  const red = getRandom();
  const green = getRandom();
  const blue = getRandom();

  const getColor = pickInBetween[red]+pickInBetween[green]+pickInBetween[blue];

  return getColor;
}

const calculateHue = (color) => {
  // get the R G B value from HEX color
  const r = color.substr(0,1)+color.substr(0,1)
  const g = color.substr(1,1)+color.substr(1,1)
  const b = color.substr(2,2)+color.substr(2,2)
  const red = parseInt(r, 16)
  const green = parseInt(g, 16)
  const blue = parseInt(b, 16)
  // 
  const hue = red*0.299 + green*0.587 + blue*0.114;

  if(color.length === 3) {
    console.log('HUE SCORE:', hue);
    switch (true) {
      case (hue > 150):
        return 'black';
      default:
        return 'white';
    }
  }
}

const App = () => {
  let [ bckColor, setBckColor ] = useState(randomColor());
  const [ textColor, setTextColor ] = useState(calculateHue(bckColor));

  const handleColorChange = (event) => {
    setBckColor(event.target.value)
    calculateHue(event.target.value)
  }

  return (
    <div className="app" style={{ backgroundColor: '#'+bckColor }}>
      <div className="app-color" style={{ color: calculateHue(bckColor) }}>
        #<input style={{ display: 'inline-block', color: calculateHue(bckColor) }} type="text" value={bckColor} onChange={handleColorChange}/>
      </div>
    </div>
  );
}

export default App;

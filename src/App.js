import React, { useState, useEffect } from 'react';
import { FaRedoAlt, FaRegCopy, FaEllipsisV, FaPlus } from 'react-icons/fa';

import Utils from './utils';
import { ColorsContext } from './Contexts/ColorsContext';
import './App.css';

import Color from './Color';

const App = () => {
  let [bckColor, setBckColor] = useState(Utils.randomColor())
  let [ clipboardStatus, setClipboardStatus ] = useState(false)
  let [ videoStatus, setVideoStatus ] = useState(false);
  let [colors, setColors] = useState([])
  let [addButtonStatus, setAddButtonStatus] = useState(false)
  let [themeColorsLimite] = useState(4)

  const isMobile = Utils.isMobileDevice();

  const refreshColor = (event) => {
    //event.preventDefault();
    setBckColor(Utils.randomColor());
  }

  const hexToClopBoard = (event) => {
    Utils.copyToClipboard('#' + bckColor)
    setClipboardStatus(true);
  }

  const ColorPalette = () => {
    return (
      <div className="theme-colors">
        {colors.map((color, index) => <Color key={index} hex={color} border={'none'} />)}
      </div>
    )
  }

  const addColorToFav = () => {
    setColors([...colors, bckColor]);
    setBckColor(Utils.randomColor());
    colors.length < themeColorsLimite ? setAddButtonStatus(false) : setAddButtonStatus(true);
  }

  const handleMobileDemo = (event) => {
    event.preventDefault();
    if(videoStatus) {
      setVideoStatus(false)
    } else {
      setVideoStatus(true)
    }
  }

  const MobileWarning = () => {
    return (
      <div
        className="mobile warning"
        style={{ color: `#${bckColor}`, backgroundColor: Utils.calculateHue(bckColor) }}
      ><a href="/#what-can-i-do" onClick={handleMobileDemo}>See what you can do on a computer</a></div>
    )
  }

  const VideoDemo = () => {
    return (
      <div className={videoStatus ? 'video-wrapper open' : 'video-wrapper close'}>
        <div className="video">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/CrRG_rF6o4M"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"> 
          </iframe>
          <button onClick={handleMobileDemo} className="button button-close">Close</button>
        </div>
      </div>
    )
  }

  useEffect(() => {
    if(clipboardStatus) {
      window.setTimeout(()=> {setClipboardStatus(false)}, 2000);
    }
  })

  return (
    <ColorsContext.Provider value={{ colors, setColors, bckColor, setBckColor, themeColorsLimite, setAddButtonStatus }}>
      <div className="app" style={{ backgroundColor: '#' + bckColor, height: window.innerHeight }}>
        {isMobile && <MobileWarning />}
        {isMobile && <VideoDemo />}
        <div
          className={clipboardStatus ? 'message show' : 'message hide'}
          style={{ color: Utils.calculateHue(bckColor) }}
          >
          <span role="img" aria-label="clipboard">📋 </span>Copied!
        </div>
        <header>
          <nav>
            <ul>
              <li className="main"><FaEllipsisV /></li>
            </ul>
          </nav>
        </header>
        <div className="app-color" style={{ color: Utils.calculateHue(bckColor) }}>
          <h1>{`#${bckColor}`}</h1>
          <div className="actions">
            <button
              className={`button get-random-color ${Utils.calculateHue(bckColor)}`}
              title="Give me another ramdom color"
              style={{ color: Utils.calculateHue(bckColor) }}
              onClick={refreshColor}
            ><FaRedoAlt /> <span>Another color</span>
            </button>
            <button
              className={`button copy-to-clipboard  ${Utils.calculateHue(bckColor)}`}
              title={`Copy #${bckColor} to clipboard`}
              style={{ color: Utils.calculateHue(bckColor) }}
              onClick={hexToClopBoard}>
              <FaRegCopy /> <span>Copy to clipboard</span>
            </button>
            {!isMobile && (
            <button
              className={`button add-to-theme  ${Utils.calculateHue(bckColor)}`}
              title={`Add #${bckColor} to your favorite colors`}
              style={{ color: Utils.calculateHue(bckColor) }}
              onClick={addColorToFav}
              disabled={addButtonStatus}>
              <FaPlus /> <span>Add to fav</span>
            </button>
            )}
          </div>
        </div>
        {!isMobile && <ColorPalette />}
      </div>
    </ColorsContext.Provider>
  );
}

export default App;

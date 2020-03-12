import React, { useState, useEffect } from 'react';
import { FaRedoAlt, FaRegCopy, FaEllipsisV, FaPlus } from 'react-icons/fa';

import Utils from './utils';
import { ColorsContext } from './Contexts/ColorsContext';
import './App.css';

import Color from './Color';

const App = () => {
  let [bckColor, setBckColor] = useState(Utils.randomColor())
  let [clipboardStatus, setClipboardStatus] = useState(false)
  let [videoStatus, setVideoStatus] = useState(false);
  let [colors, setColors] = useState([])
  let [addButtonStatus, setAddButtonStatus] = useState(false)
  let [themeColorsLimite] = useState(4)

  const isMobile = Utils.isMobileDevice();

  const refreshColor = (event) => {
    setBckColor(Utils.randomColor());
    if(navigator.vibrate) {
      navigator.vibrate([85, 50, 85])
    }
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
    if (videoStatus) {
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
      ><a href="/#what-can-i-do" onClick={handleMobileDemo}>See what you can do on a computer.</a></div>
    )
  }

  const DesktopPreview = () => {
    return (
      <div
        className="desktop in"
        style={{ color: `#${bckColor}`,backgroundColor: Utils.calculateHue(bckColor) }}
      ><a href="/#what-can-i-do" onClick={handleMobileDemo}>See how to use COLORED.</a></div>
    )
  }

  const VideoDemo = () => {
    return (
      <div className={videoStatus ? 'wrapper open' : 'wrapper close'} onClick={handleMobileDemo}>
        <div className="video-wrapper">
          <iframe
            title="video"
            width="560"
            height="349"
            src="https://www.youtube.com/embed/CrRG_rF6o4M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen">
          </iframe>
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (clipboardStatus) {
      window.setTimeout(() => { setClipboardStatus(false) }, 2000);
    }
  }, [clipboardStatus])

  return (
    <ColorsContext.Provider value={{ colors, setColors, bckColor, setBckColor, themeColorsLimite, setAddButtonStatus }}>
      <div className="app" style={{ backgroundColor: '#' + bckColor }}>
        {isMobile && <MobileWarning />}
        {!isMobile && <DesktopPreview />}
        <VideoDemo />
        <div
          className={clipboardStatus ? 'message show' : 'message hide'}
          style={{ color: Utils.calculateHue(bckColor) }}
        >
          <span role="img" aria-label="clipboard">📋 </span>Copied!
        </div>
        <header style={{display: 'none'}}>
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
                title={`Add #${bckColor} to your color theme`}
                style={{ color: Utils.calculateHue(bckColor) }}
                onClick={addColorToFav}
                disabled={addButtonStatus}>
                <FaPlus /> <span>Add to theme</span>
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

import React from 'react';

const Damien = () => {
  
  const whoIsDamien = {
    'javaScriptEs6': true,
    'react': true,
    'redux': true,
    'tdd': 'need to practice',
    'kindPerson': true,
    'teamPlayer': true,
    'isFrontEndDevelopper': true,
    'isDesigner': true,
    'weirdProfil': true,
    'pastExperienceRemoteWork': true,
    'call': () => {
      return(
        <a href="tel:0685911888">Let's talk!</a>
      )
    }
  }
  
  return(
    <div>
      { whoIsDamien.call() }
    </div>
  )
}

export default Damien;
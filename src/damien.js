import React from 'react';

const Damien = () => {
  
  const whoIsDamien = {
    javaScriptEs6: true,
    react: true,
    redux: true,
    reactRouter: true,
    tdd: 'need to practice',
    kindPerson: true,
    teamPlayer: true,
    isFrontEndDevelopper: true,
    isDesigner: true,
    weirdProfil: true,
    pastExperienceRemoteWork: true,
    call: () => {
      return(
        <a href="tel:0685911888">Let's talk!</a>
      )
    },
    projects: [
      {
        name: "Emoji Notes",
        description: "Send nice messages to your friends with an emoji",
        stack: ['react', 'redux', 'react-router', 'heroku', 'MySQL'],
        release: 'Jan 2020',
        url: "https://emojinotes.herokuapp.com/"
      },
      {
        name: "Exchange Rates",
        description: "Free exchange rate updated everyday",
        stack: ['react', 'Github pages'],
        release: 'feb 2020',
        url: "https://www.regulardesigner.com/exchange-rates/"
      },
      {
        name: "Skateboard Map",
        description: "Find your next spot",
        stack: ['react', 'Github pages'],
        release: 'feb 2020',
        url: "https://www.regulardesigner.com/skateparks-map/"
      },
      {
        name: "Colored",
        description: "Find your favorite 3 digit hex color",
        stack: ['react', 'react hooks', 'Github pages'],
        release: 'Mar 2020',
        url: "https://www.regulardesigner.com/colored/"
      }
    ]
  }

  const ProjectsList = (props) => {
    const { projects } = props;
    return (
      projects.map((project, index) => (
        <li>
          <a
            target='_blank'
            rel="noopener noreferrer"
            href={ project.url }
          >
            { project.name }
          </a>
        </li>
        )
      )
    )
  }
  
  return(
    <div>
      { whoIsDamien.call() }
      <ul>
        <ProjectsList projects={ whoIsDamien.projects } />
      </ul>
    </div>
  )
}

export default Damien;
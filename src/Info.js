import React from 'react';

const Info = (props) => {
  const { color } = props;
  return (
    <div className="info">
      <h2 style={{ color: `#${color}` }}>COLORED</h2>
      <p>Hi folks, you have to create a website design but you don't know what colors to pick? Don't be nervous, COLORED is here to help you!</p>
      <p>With COLORED you can easily create a 5 colors theme for your next website project with an ounce of serendipity.</p>
      <p>So ask a few random colors and make a theme with those!</p>
    </div>
  )
}

export default Info;
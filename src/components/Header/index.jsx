import React from 'react';

import './Header.scss';

export default (props) => {
  return (
    <header className='intro'>
      <label id="switch" className="switch">
        <input type="checkbox" onChange={e => props.toggleTheme(e)} id="slider" />
        <span className="slider round"></span>
      </label>
      <h1>Hello !</h1>
      <h2>My name is <span className='name'>Alexander Freyr Sveinsson</span> I am a software engineer focusing on creating beautiful and  intuitive tools</h2>
      <h3>Get in touch <a href='mailto:alexfreyrs@gmail.com'>alexfreyrs@gmail.com</a></h3>
    </header>
  );
};

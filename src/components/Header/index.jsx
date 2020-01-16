import React from 'react';

import './Header.scss';

export default () => {
  return (
    <header className='intro'>
      <h1>Hello !</h1>
      <h2>My name is <span className='name'>Alexander Freyr Sveinsson</span> I am a software engineer focusing on creating beautiful and  intuitive tools</h2>
      <h3>Get in touch <a href='mailto:alexfreyrs@gmail.com'>alexfreyrs@gmail.com</a></h3>
    </header>
  );
};

import React from 'react';
import './Background.scss';
import SectionFade from '../SectionFade';

export default () => {
  return (
    <SectionFade>
      <h2 className='section_name'>
        Background
      </h2>
      <div className='section_info_background'>
        <div className='text'>
          I am currently a front end developer at <a href='http://annata.net/'>Annata</a> building a portal for the automotive industry, with some awesome people. I recently graduated from the <a href='https://english.hi.is/university_of_iceland'>University of Iceland</a> with B.Sc. degree in computer science.
        </div>
        <div className='text'>
          At Annata, I work as a part of the innovation team where I have been building a React website to connect dealerships to car companies. I have made games in Unity as well as in JavaScript with HTML5 Canvas. I took a course in Computer Gaming, at the University of Iceland, where I learned to create games from scratch. 
        </div>
        <div className='text'>
          My interests include playing board and video games with friends and cooking.
        </div>
      </div>
    </SectionFade>
  );
};

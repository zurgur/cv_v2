import React from 'react';
import './Skillz.scss';
import SectionFade from '../SectionFade';

export default () => {
  return (
    <SectionFade>
      <h2 className='section_name'>
        Skils
      </h2>
      <div className='slillz_info'>
        <div className='categoty_skillz'>
          <div className='category_name'>Language</div>
          <p>Javascript</p><p>Typescript</p><p>Python</p><p>C#</p><p>C++</p><p>Java</p><p>SQL</p><p>HTML</p><p>(s)CSS</p>
        </div>
        <div>
        <div className='categoty_skillz'>
          <div className='category_name'>Framworks</div>
            <p>ReactJS</p><p>Node</p><p>Express</p><p>Spring boot</p><p>Hibernate</p><p>.NET</p><p>Redux</p><p>Mobx state tree</p>
        </div>
        </div>
        <div>
        <div className='categoty_skillz'>
          <div className='category_name'>Tools</div>
          <p>GIT</p><p>DevOps</p><p>Unity</p>
        </div>
        </div>
      </div>
    </SectionFade>
  );
};

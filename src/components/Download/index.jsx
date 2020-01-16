import React from 'react';

import './Download.scss';

export default () => {
  return (
    <section className='download_section'>
      <a href='/Resume.pdf' tragt='_blank' download='Alexander_resume.pdf' className="button">
        Grab my CV
      </a>
    </section>
  );
};

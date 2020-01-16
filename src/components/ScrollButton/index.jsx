import React from 'react';
import './ScrollButton.scss';

export default () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <span role='img' aria-label='up to the top'  className='scroll' onClick={scrollToTop}>
      ⬆️
    </span>
  )
}
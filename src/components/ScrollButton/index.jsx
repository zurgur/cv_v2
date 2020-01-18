import React, {useEffect, useState} from 'react';
import './ScrollButton.scss';

export default () => {
  const [className, setClassName] =useState('scroll');
  const ref = React.createRef()
  useEffect(() => {
    console.log(ref);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 1) {
          setClassName('scroll');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    )
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <span role='img' aria-label='up to the top' ref={ref} className={className} onClick={scrollToTop}>
      ⬆️
    </span>
  )
}
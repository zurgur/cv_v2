import React, { useEffect, useState } from 'react';
import './SectionFade.scss';

export default (Children) => {
  const ref = React.createRef();
  const [className, setClassName] = useState('fade_section');
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.01) {
          setClassName('fade_section visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
      }
    )
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return (
    <section className={className} ref={ref}>
      {Children.children.map((child) => child)}
    </section>
  );
};

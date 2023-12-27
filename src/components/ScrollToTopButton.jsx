import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'
import { arrow } from '../assets';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
      <img src={arrow} alt="" className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}/>
  );
};

export default ScrollToTopButton;
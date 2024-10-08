import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import aboutImage1 from "../assets/D95A4984.JPG";
import aboutImage2 from "../assets/D95A5092 (1).jpg";
import aboutImage3 from "../assets/epoque-contact.jpg";

const AboutInHomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const textRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (inView) {
      // Initialize SplitType
      const splitText = new SplitType(textRef.current);

      // GSAP animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animation settings
      tl.fromTo(
        splitText.chars,
        { opacity: 0, y: '+=50', skewY: 10 },
        { opacity: 1, y: 0, skewY: 0, stagger: 0.05, duration: 0.8 }
      );
    }
  }, [inView]);

  // Conditionally apply mt-6 if the current path is /about
  const isAboutPage = location.pathname === '/about';

  // Array of image sources for the /about path
  const aboutImages = [aboutImage1, aboutImage2, aboutImage3];

  return (
    <>
      <div className={`px-5 ${isAboutPage ? 'mt-6' : 'mt-24 lg:mt-40'}`} ref={ref}>
        <div className='text-center'>
          <p className='text-[19px] font-custom text-[#201E1F] uppercase'>About us</p>
          <p ref={textRef} className='flex text-7xl lg:text-[95px] lg:w-[962px] font-custom1 mx-auto leading-[84.93px] text-[#8E2209]'>
            <span className='mt-8'>
              <svg width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_11_107)">
                  <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
                  <path d="M30.39 58.7601C20.85 59.2301 20.47 59.6001 20 69.1501C19.53 59.6001 19.16 59.2301 9.62 58.7601C19.17 58.2901 19.54 57.9201 20 48.3701C20.47 57.9201 20.84 58.2901 30.39 58.7601Z" fill="#8E2209"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_107">
                    <rect width="40.02" height="69.15" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            Welcome to Époque, the perfect space for a memorable dining experience.
          </p>
        </div>
      </div>

      {/* Conditionally render three images when the path is /about */}
      {isAboutPage && (
        <div className='py-16 w-full px-5 lg:px-20 2xl:px-48 grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {aboutImages.map((image, index) => (
            <img key={index} className='w-full h-80 lg:h-[642px] object-cover' src={image} alt="" />
          ))}
        </div>
      )}

      {!isAboutPage && (
        <div className='py-16 w-full px-5 lg:px-20 2xl:px-48'>
          <img className='w-full h-80 lg:h-[642px] object-cover' src={aboutImage1} alt='About Époque' />
        </div>
      )}
    </>
  );
};

export default AboutInHomePage;

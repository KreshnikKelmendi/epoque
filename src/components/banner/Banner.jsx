import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import bannerPhoto from '../assets/epoque-banner.png';

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const textRef = useRef(null); 
  const descriptionRef = useRef(null); 

  useEffect(() => {
    if (inView) {
      // Refined GSAP Animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

      tl.from(textRef.current.children, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power2.out',
      })
      .from(descriptionRef.current, {
        yPercent: 50,
        opacity: 0,
        scale: 0.95,
        ease: 'power2.out',
      }, '-=0.8'); // Overlap animation with the previous one for a smoother effect
    }
  }, [inView]);

  return (
    <div ref={ref} className='relative items-center w-full lg:h-[100vh] 2xl:h-screen flex flex-col lg:flex-row px-5 lg:px-20 2xl:px-48 mt-16 lg:mt-0'>
      <div className='relative z-10 lg:mt-[1px] 2xl:mt-[-207px]'>
        <svg  width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_11_101)">
            <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
            <path d="M30.39 58.76C20.85 59.23 20.47 59.6 20 69.15C19.53 59.6 19.16 59.23 9.62 58.76C19.17 58.29 19.54 57.92 20 48.37C20.47 57.92 20.84 58.29 30.39 58.76Z" fill="#8E2209"/>
          </g>
          <defs>
            <clipPath id="clip0_11_101">
              <rect width="40.02" height="69.15" fill="white"/>
            </clipPath>
          </defs>
        </svg>

        {/* Animated Text */}
        <p ref={textRef} className='text-6xl lg:text-[150px] lg:leading-[134.1px] font-custom1 lg:w-[881px]'>
          A<span className='font-custom1'> TR</span><span className=''>UE</span> DIS<span className='lg:text-white'>PLAY</span><br/> OF A TAST<span className='lg:text-white'>E AND STYLE</span>
        </p>
        
        {/* Description */}
        <p ref={descriptionRef} className='text-[19px] font-custom lg:w-[589px] text-justify leading-[25.62px] tracking-tighter'>
          At Époque, we combine delicious flavors with <span className='lg:text-white'>elegance. Each dish is </span> carefully crafted to offer a stylish and comforta<span className='lg:text-white'>ble atmosphere where</span> dining is an experience to savor.
        </p>
      </div>
      
      {/* Banner Photo */}
      <div className='lg:absolute top-16 left-[484px] 2xl:left-[584px] lg:pr-16 2xl:pr-0 mt-10 lg:mt-0'>
        <img className='2xl:w-[1111px] 2xl:h-[619px] object-cover' src={bannerPhoto} alt='' />
      </div>
    </div>
  );
};

export default Banner;

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { meat } from '../menu/meat';

// Helper function to chunk array into subarrays of specified size
const chunkArray = (array, chunkSize) => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const MeatPage = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const imageRefs = useRef({});

  useEffect(() => {
    gsap.registerPlugin(gsap);
  }, []);

  const handleMouseEnter = (title, id) => {
    if (window.innerWidth > 1024) {
      setHoveredTitle(title);
      const image = imageRefs.current[id];
      gsap.fromTo(
        image,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
    const image = imageRefs.current[hoveredTitle];
    if (image) {
      gsap.to(image, { x: -200, opacity: 0, duration: 0.5, ease: 'power2.out' });
    }
  };

  return (
    <div className='px-5 lg:px-20 2xl:px-56 mt-12 lg:mt-24 relative items-center w-full h-fit lg:pb-10'>
      <svg className='absolute top-[-50px] right-5 2xl:right-[100px]' width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_74_338)">
        <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
        <path d="M30.3901 58.76C20.8501 59.23 20.4701 59.6 20.0001 69.15C19.5301 59.6 19.1601 59.23 9.62012 58.76C19.1701 58.29 19.5401 57.92 20.0001 48.37C20.4701 57.92 20.8401 58.29 30.3901 58.76Z" fill="#8E2209"/>
        </g>
        <defs>
        <clipPath id="clip0_74_338">
        <rect width="40.02" height="69.15" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <div className='border-b flex justify-between border-[#11141C] pb-6 lg:pb-6 text-[19px] font-custom'>
        <p>CATEGORY</p>
        <p className='hidden lg:block'>PRICE</p>
      </div>
      
      <svg className='hidden lg:block lg:absolute top-96 left-0 lg:left-3 2xl:left-24' width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_74_338)">
          <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
          <path d="M30.3901 58.76C20.8501 59.23 20.4701 59.6 20.0001 69.15C19.5301 59.6 19.1601 59.23 9.62012 58.76C19.1701 58.29 19.5401 57.92 20.0001 48.37C20.4701 57.92 20.8401 58.29 30.3901 58.76Z" fill="#8E2209"/>
          </g>
          <defs>
          <clipPath id="clip0_74_338">
          <rect width="40.02" height="69.15" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      {meat?.map((item) => {
        const subItemChunks = chunkArray(item.subItems, 3);
        return (
          <div
            key={item.id}
            className='border-b border-[#11141C] lg:flex lg:items-center py-6 lg:py-0 lg:pb-6 lg:h-fit lg:relative uppercase'
            onMouseEnter={() => handleMouseEnter(item.title, item.id)}
            onMouseLeave={handleMouseLeave}
            data-title={item.title}
          >
            <Link to={item.link} className='text-[#11141C] font-custom text-[19px]'>
              {item.category}
            </Link>

            {(hoveredTitle === item.title || window.innerWidth <= 1024) && (
              <div className='lg:absolute lg:left-0 lg:top-0 lg:text-right'>
                <img
                  ref={(el) => imageRefs.current[item.id] = el}
                  src={item.image}
                  alt={item.title}
                  className='w-full lg:w-[375px] h-60 md:h-80 lg:py-1 lg:h-full object-cover mt-4 lg:mt-0'
                />
              </div>
            )}
            <div className='text-6xl pt-6 lg:text-[150px] font-custom1 text-[#8E2209] lg:ml-80 2xl:ml-96'>
              <p>{item.title}</p>
              {subItemChunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className='flex flex-row lg:flex-wrap space-x-4 py-[2px]'>
                  {chunk.map((subItem, idx) => (
                    <ul>
                      <li key={idx} className='text-[19px] uppercase font-custom lg:mb-0 text-[#11141C]'>{subItem} ·</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
            <div className='ml-auto'>
              <p className='text-[#11141C] font-custom1 text-[38px]'>{item.price}€</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeatPage;

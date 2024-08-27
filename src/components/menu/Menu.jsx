import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './data';

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

const Menu = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (title) => {
    if (window.innerWidth > 1024) {
      setHoveredTitle(title);
    }
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  return (
    <div className='px-5 lg:px-20 2xl:px-56 mt-16 lg:mt-24 relative items-center w-full h-fit lg:pb-10'>
      <svg className='absolute top-[-50px] right-5 2xl:right-[100px]' width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_74_338)">
          <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
          <path d="M30.3901 58.76C20.8501 59.23 20.4701 59.6 20.0001 69.15C19.5301 59.6 19.1601 59.23 9.62012 58.76C19.1701 58.29 19.5401 57.92 20.0001 48.37C20.4701 57.92 20.8401 58.29 30.3901 58.76Z" fill="#8E2209"/>
        </g>
        <defs>
          <clipPath id="clip0_74_338">
            <rect width="40.02" height="69.15" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div className='border-b border-[#11141C] pb-6 lg:pb-10'>
        <p className='text-[19px] font-custom'>MENU</p>
      </div>
      
      <svg className='hidden lg:block lg:absolute top-96 left-0 lg:left-3 2xl:left-24' width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_74_338)">
          <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
          <path d="M30.3901 58.76C20.8501 59.23 20.4701 59.6 20.0001 69.15C19.5301 59.6 19.1601 59.23 9.62012 58.76C19.1701 58.29 19.5401 57.92 20.0001 48.37C20.4701 57.92 20.8401 58.29 30.3901 58.76Z" fill="#8E2209"/>
        </g>
        <defs>
          <clipPath id="clip0_74_338">
            <rect width="40.02" height="69.15" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      {items?.map((item) => {
        const subItemChunks = chunkArray(item.subItems, 3);
        return (
          <div
            key={item.id}
            className='border-b border-[#11141C] lg:flex lg:items-center py-2 lg:py-0 lg:pb-6 lg:h-fit lg:relative'
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            data-title={item.title}
          >
            <Link onClick={handleClick} to={item.link} className='hover:bg-[#8E2209] hidden lg:block hover:scale-110 hover:duration-500 hover:text-white hover:border-none lg:absolute text-center lg:py-3 mb-4 lg:mb-0 lg:mr-8 left-0 text-[14px] lg:w-[136px] font-custom border-[1px] border-[#8E2209] rounded-[100%] px-6 py-1 lg:p-4 text-[#201E1F]'>
              <p>{item.text}</p>
            </Link>

            <div className='text-6xl pt-6 lg:text-[150px] font-custom1 text-[#8E2209] lg:ml-80 2xl:ml-96 uppercase'>
            <Link onClick={handleClick} to={item.link}>
              <p>{item.title}</p>
              </Link>
              {subItemChunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className='flex flex-col lg:flex-row lg:space-x-2 lg:w-fit lg:py-[2px]'>
                  {chunk.map((subItem, idx) => (
                    <ul key={idx} className='list-none'>
                      <li className='text-base lg:text-[15px] 2xl:text-[19px] uppercase font-custom text-[#11141C]'>
                        {subItem}
                        {/* Hide the separator on small screens */}
                        {idx !== chunk.length - 1 && (
                          <span className='hidden lg:inline'> ·</span>
                        )}
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
            <Link onClick={handleClick} to={item.link} className='hover:bg-[#8E2209] block mt-4 lg:hidden hover:scale-110 hover:duration-500 hover:text-white hover:border-none lg:absolute lg:px-8 lg:py-3 mb-4 lg:mb-0 lg:mr-8 left-0 text-[14px] text-center w-fit lg:w-[136px] font-custom border-[1px] border-[#8E2209] rounded-[100%] px-6 py-1 lg:p-4 text-[#201E1F]'>
              <p>{item.text}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

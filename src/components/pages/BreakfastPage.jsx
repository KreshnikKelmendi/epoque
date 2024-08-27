import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { breakfast } from '../menu/breakfast';

// Helper function to chunk array into subarrays of specified size
const chunkArray = (array = [], chunkSize) => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const BreakfastPage = () => {
  const refs = useRef([]);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      refs.current.forEach((el, index) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: 'power4.out' }
        );
      });
    }
  }, [inView]);

  return (
    <div ref={sectionRef} className='px-5 lg:px-20 2xl:px-56 mt-16 lg:mt-24 relative items-center w-full h-fit lg:pb-10'>
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

      {breakfast?.map((item) => {
        const subItemChunks = chunkArray(item.subItems || [], 3); // Use empty array if item.subItems is undefined
        return (
          <div
            key={item.id}
            className='border-b border-[#11141C] lg:flex lg:items-center py-2 lg:py-0 lg:pb-6 lg:h-fit lg:relative'
            data-title={item.title}
          >
            <p className='font-custom'>{item.category}</p>
            <div className='text-6xl pt-6 lg:text-[130px] 2xl:text-[150px] font-custom1 text-[#8E2209] lg:ml-44 2xl:ml-80 '>
              <p className='uppercase'>{item.title}</p>
              {subItemChunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className='flex flex-col lg:flex-row lg:space-x-1 lg:py-[2px]'>
                  {chunk.map((subItem, idx) => (
                    <ul key={idx} className='list-none'>
                      {subItem && (
                        <li className='text-base lg:text-[19px] font-custom font-semibold text-[#11141C]'>
                          {subItem}
                          {idx !== chunk.length - 1 && (
                            <span className='hidden lg:inline'>,</span>
                          )}
                        </li>
                      )}
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

export default BreakfastPage;

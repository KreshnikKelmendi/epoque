import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { items } from '../menu/data';
import { gsap } from 'gsap';

const SubMenu = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const [filtersOpen, setFiltersOpen] = useState(false); // Initially set to false

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen); // Toggle filters visibility
  };

  const handleLinkClick = () => {
    setFiltersOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    if (filtersOpen) {
      // Animate the container to open
      gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
      );
    } else {
      // Ensure the container is hidden initially
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [filtersOpen]);

  // Define the paths for which the SubMenu should be rendered
  const validPaths = [
    '/caffe',
    '/koktej',
    '/breakfast',
    '/starters',
    '/sallata',
    '/burgers&sandwiches',
    '/epoque-dishes'
  ];

  // Only render SubMenu if the current path is in the validPaths array
  if (!validPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div className='w-full px-5 lg:px-0 lg:mt-24'>
      {/* Mobile: Filters Dropdown with Full Width */}
      <div className='lg:hidden flex justify-start items-center py-10'>
        <button
          onClick={toggleFilters}
          className='flex items-center justify-between w-fit px-4 py-2 bg-[#8E2209] text-white uppercase font-semibold font-custom text-xl hover:bg-[#6b1d07]'
        >
          Categories
          <AiOutlineFilter className={`ml-2 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Large Devices: Filters Button on the Right */}
      <div className='hidden lg:flex justify-end items-center w-full lg:px-20 2xl:px-56'>
        <button
          onClick={toggleFilters}
          className='flex items-center font-custom justify-center px-4 py-2 bg-[#8E2209] text-white uppercase font-semibold text-base hover:bg-[#6b1d07]'
        >
          Categories
          <AiOutlineFilter className={`ml-2 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Categories Menu */}
      <div 
        ref={menuRef} 
        className={`overflow-hidden lg:flex justify-center items-center w-full ${filtersOpen ? 'block' : 'hidden'}`}
        style={{ height: 0, opacity: 0 }} // Ensure the initial state is hidden
      >
        <ul className='grid grid-cols-2 gap-16 w-full justify-center lg:px-20 2xl:pl-56 lg:grid-cols-4 lg:space-x-0 text-3xl lg:text-[48px] uppercase font-custom1 text-center'>
          {items.map((item, index) => (
            <NavLink 
              key={item.id} 
              to={item.link} 
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={handleLinkClick} // Close the menu on link click
              className={({ isActive }) => 
                `cursor-pointer duration-300 text-[#8E2209] leading-[41.15px] hover:bg-[#8E2209] lg:rounded-[100%] flex justify-center items-center hover:text-white w-full lg:w-[216px] h-[48px] lg:h-[118px] ${isActive ? 'bg-[#8E2209] text-white' : ''}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul> 
      </div>
    </div>
  );
};

export default SubMenu;

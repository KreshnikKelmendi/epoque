import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineFilter } from 'react-icons/ai'; // Importing filter icon
import { NavLink, useLocation } from 'react-router-dom';
import { items } from '../menu/data';
import { gsap } from 'gsap'; // Import GSAP

const SubMenu = () => {
  const location = useLocation();
  const menuRef = useRef(null); // Reference for the menu container
  const menuItemsRef = useRef([]); // Reference for each menu item

  // Determine if any menu item is active
  const isAnyItemActive = items.some(item => location.pathname === item.link);

  const [filtersOpen, setFiltersOpen] = useState(isAnyItemActive); // State to toggle filters, default based on active link

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen); // Toggle the filters visibility
  };

  useEffect(() => {
    if (filtersOpen) {
      // Animate the container height and opacity
      gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
      // Animate the menu items with a stagger effect
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 }, // Initial state (hidden and slightly below)
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 } // Final state (visible and in place)
      );
    } else {
      // Hide the menu items
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [filtersOpen]);

  // Only render SubMenu if the current path is '/breakfast'
  if (location.pathname !== '/breakfast') {
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
      <div className='hidden lg:flex justify-end items-center w-full mb-4 lg:px-20 2xl:px-56'>
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
      >
        <ul className='grid grid-cols-2 gap-16 w-full justify-center lg:px-20 2xl:pl-56 lg:grid-cols-4 lg:space-x-0 text-3xl lg:text-[48px] uppercase font-custom1 text-center'>
          {items.map((item, index) => (
            <NavLink 
              key={item.id} 
              to={item.link} 
              ref={(el) => (menuItemsRef.current[index] = el)}
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

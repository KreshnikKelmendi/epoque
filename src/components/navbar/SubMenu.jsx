import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'; // Using the down arrow icon
import { NavLink, useLocation } from 'react-router-dom';
import { items } from '../menu/data';

const SubMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Only render SubMenu if the current path is '/breakfast'
  if (location.pathname !== '/breakfast') {
    return null;
  }

  return (
    <div className='w-full px-5 lg:px-0 lg:mt-24'>
      {/* Mobile: Categories Dropdown */}
      {/* <div className='lg:hidden flex justify-center items-center'>
        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='flex items-center justify-between w-full max-w-xs px-4 py-2 bg-[#8E2209] text-white uppercase font-semibold text-lg rounded-lg shadow-md hover:bg-[#6b1d07]'
          >
            Categories
            <AiOutlineDown className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

      
          {dropdownOpen && (
            <ul className='absolute left-0 mt-2 w-full max-w-xs bg-white border border-[#8E2209] rounded-lg shadow-lg'>
              {items.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  onClick={() => setDropdownOpen(false)} // Close the dropdown when a link is clicked
                  className={({ isActive }) =>
                    `block px-4 py-2 text-[#8E2209] hover:bg-[#8E2209] hover:text-white ${isActive ? 'bg-[#8E2209] text-white' : ''}`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </div> */}

      {/* Large Devices: Original Navigation */}
      <div className='hidden lg:flex justify-center items-center w-full'>
        <ul className='flex items-center lg:space-x-20 2xl:space-x-32 text-[38px] uppercase font-custom1'>
          {items.map((item) => (
            <NavLink 
              key={item.id} 
              to={item.link} 
              className={({ isActive }) => 
                `m-2 cursor-pointer duration-300 text-[#8E2209] hover:bg-[#8E2209] rounded-full hover:text-white p-2 ${isActive ? 'bg-[#8E2209] text-white' : ''}`
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

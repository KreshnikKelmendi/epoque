import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { items } from '../menu/data';

const SubMenu = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full flex justify-center items-center h-24 mx-auto text-[#8E2209] px-5 lg:mt-24'>
      {/* Logo and navigation for large devices */}
      <div className='flex justify-center items-center space-x-8'>
        {/* Left-side navigation links */}
        <ul className='flex items-center lg:space-x-20 2xl:space-x-32 text-[58px] uppercase font-custom1'>
          {items.map((item) => (
            <NavLink 
              key={item.id} 
              to={item.link} 
              className={({ isActive }) => 
                `m-2 cursor-pointer duration-300 text-[#8E2209] hover:border hover:rounded-[100%] hover:border-[#8E2209] hover:lg:w-[216px] hover:text-center ${isActive ? 'border border-[#8E2209] hover:bg-[#8E2209] hover:text-white duration-500 ease-linear rounded-[100%] text-[#8E2209] text-center text-[58px] lg:w-[216px] font-custom1' : ''}`
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

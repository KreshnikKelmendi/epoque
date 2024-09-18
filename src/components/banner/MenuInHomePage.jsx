import React from 'react'
import firstImage from "../assets/PASTA.png"
import secondImage from "../assets/pasta2.png"
import thirdImage from "../assets/French-Toast.jpg"
import { Link } from 'react-router-dom';

const MenuInHomePage = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-full flex flex-col lg:flex-row px-5 lg:px-20 2xl:px-48 mt-24 lg:mt-44'>
       <div className='w-full lg:w-1/2'>
         <p className='text-[19px] text-[#201E1F] font-custom'>MENU</p>
         <p className='flex text-7xl w-full lg:text-[100px] 2xl:text-[150px] font-custom1 2xl:leading-[134.1px] mt-8 text-[#8E2209]'>Joing the taste of a Marvelous era 
            <svg className='ml-16' width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_104)">
                <path d="M40.02 20.01C21.63 20.91 20.91 21.63 20.01 40.02C19.11 21.63 18.39 20.91 0 20.01C18.39 19.11 19.11 18.39 20.01 0C20.91 18.39 21.63 19.11 40.02 20.01Z" fill="#8E2209"/>
                <path d="M30.3901 58.76C20.8501 59.23 20.4701 59.6 20.0001 69.15C19.5301 59.6 19.1601 59.23 9.62012 58.76C19.1701 58.29 19.5401 57.92 20.0001 48.37C20.4701 57.92 20.8401 58.29 30.3901 58.76Z" fill="#8E2209"/>
                </g>
                <defs>
                <clipPath id="clip0_11_104">
                <rect width="40.02" height="69.15" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </p>
         <div className='mt-8'>
            <img className='lg:w-[706px] lg:h-[399px] object-cover' src={firstImage} alt='' />
            {/* <div className='w-fit mt-8 text-[#201E1F]'>
                <p className='text-[14px] font-custom'>PASTA</p>
                <p className='text-[19px] font-custom'>SHPAGETA BOLOGNESE</p>
                <p className='text-right font-custom1 text-[28px]'>11.99€</p>
            </div> */}
         </div>
       </div>

       <div className='lg:w-1/2 mt-8 lg:mt-0'>
         <div className='flex w-full gap-4 lg:pl-4'>
            
            <div className='w-full'>
                <img className='2xl:w-[329px] 2xl:h-[494px]' src={secondImage} alt='' />
            </div>
            <div className='w-full'>
                <img className='2xl:w-[329px] 2xl:h-[494px]' src={thirdImage} alt='' />
            </div>
           
         </div>
         <div className='flex mt-8 lg:mt-28'>
            <p className='text-[19px] font-custom leading-[25.62px] text-[#201E1F] lg:pl-10 2xl:pl-0'>
            Époque – where timeless flavors meet modern elegance, creating unforgettable moments in every dining experience.
            </p>
           
         </div>
         <div className='lg:mt-0 lg:pl-10 2xl:pl-0'>
            <button className='text-[14px] font-custom mt-6 border-[1px] border-[#8E2209] rounded-[100%] px-10 py-4 text-center text-[#201E1F] hover:bg-[#8E2209] hover:text-white hover:duration-500 hover:scale-110'>
                <Link onClick={handleClick} to="/menu">SEE MORE</Link>
            </button>
         </div>
       </div>
    </div>
  )
}

export default MenuInHomePage
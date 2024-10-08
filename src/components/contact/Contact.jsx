import React from 'react';
import contact_image from "../assets/epoque-contact.jpg"

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 lg:px-20 2xl:px-32 lg:py-24">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 px-5 2xl:px-24">
        <img
          src={contact_image}
          alt="Contact"
          className="w-full h-96 lg:h-[900px] object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div
        className="w-full lg:w-1/2 px-5 lg:pl-16 2xl:pl-0 mt-10 lg:mt-0"
       
      >
        <p className='font-custom1 text-[58px] text-[#8E2209]'>Contact Us</p>
        <form className="flex flex-col space-y-16 mt-10 font-custom">
          <input
            type="text"
            placeholder="FULL NAME"
            className="py-4 border-b 2xl:w-[573px] border-[#411011] bg-[#F4ECE9] focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-MAIL"
            className="py-4 border-b border-[#411011] 2xl:w-[573px] bg-[#F4ECE9] focus:outline-none"
          />
          <input
            placeholder="MESSAGE"
            className="py-4 border-b border-[#411011] 2xl:w-[573px] bg-[#F4ECE9] focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 text-white rounded w-[250px] bg-[#411011] hover:bg-white hover:text-[#411011]"
          >
            Send
          </button>
        </form>

        {/* Contact Information */}
        <div className="font-custom mt-20 lg:mt-48 text-[19px] 2xl:w-[573px] text-[#8E2209] flex justify-between items-end">
            <div>
                <p>epoquepejton@gmail.com</p>
                <p>+383 46 144 441</p>
                <p className='uppercase'>PRISHTINë</p>
                <p>PEJTON</p>
          </div>
          <div className="flex space-x-16 mt-4">
            <a className='hover:scale-110' href="https://www.instagram.com/epoque.pejton/" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_76_550)">
            <path d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2063 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6562 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1562C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1562C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z" fill="#8E2209"/>
            <path d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z" fill="#8E2209"/>
            <path d="M26.4625 7.45617C26.4625 8.51867 25.6 9.37492 24.5438 9.37492C23.4813 9.37492 22.625 8.51242 22.625 7.45617C22.625 6.39367 23.4875 5.53741 24.5438 5.53741C25.6 5.53741 26.4625 6.39992 26.4625 7.45617Z" fill="#8E2209"/>
            </g>
            <defs>
            <clipPath id="clip0_76_550">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>

                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_76_548)">
            <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9859 5.85094 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.2934 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.12 10.5 18.5 11.7334 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8056C26.1491 30.6053 32 23.9859 32 16Z" fill="#8E2209"/>
            </g>
            <defs>
            <clipPath id="clip0_76_548">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

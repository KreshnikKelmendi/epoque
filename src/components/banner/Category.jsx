import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAlert, AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineRight } from 'react-icons/ai';

// Define your categories with SVGs
const categories = [
  { 
    id: 1, 
    title: 'CAFE MENU', 
    link:'/caffe',
    svg: 
    <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_11_156)">
      <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
      <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
      <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
      <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
      <g clip-path="url(#clip1_11_156)">
      <path d="M96.5853 95.0438L96.3929 94.9874C91.9045 93.6621 87.1169 93.6621 82.5857 94.9874L82.3934 95.0438C77.7553 96.9895 73.5662 100.937 70.638 106.126C67.603 111.512 66 117.913 66 124.624V156.348C66 169.94 72.583 181.84 82.3934 185.929L82.6071 186.013C87.0741 187.311 91.9259 187.311 96.4357 185.985L96.6066 185.929C101.245 183.983 105.434 180.064 108.362 174.875C111.397 169.489 113 163.088 113 156.348V124.624C113 111.033 106.417 99.1609 96.5853 95.0438ZM109.11 156.348C109.11 161.988 107.764 167.318 105.241 171.801C102.826 176.087 99.3638 179.359 95.5166 180.994C93.5289 181.558 91.5198 181.84 89.4893 181.84C87.4588 181.84 85.4711 181.558 83.5261 180.994C75.3615 177.526 69.8899 167.628 69.8899 156.348V124.624C69.8899 119.013 71.2365 113.683 73.7585 109.2C76.1737 104.913 79.6362 101.642 83.4834 99.9786C87.4375 98.8507 91.5839 98.8507 95.4739 99.9786C103.638 103.447 109.11 113.345 109.11 124.624V156.348Z" fill="#8E2209"/>
      <path d="M92.8236 168.868L91.2206 172.872C90.729 174.085 89.5107 174.564 88.5917 173.916C87.6299 173.267 87.2665 171.716 87.7795 170.447L89.3825 166.443C92.161 159.534 92.1183 151.921 89.2543 145.012L86.262 137.708C82.7568 129.221 82.7781 119.887 86.3475 111.371L87.694 108.1C88.2283 106.831 89.4039 106.379 90.3443 107.084C91.2847 107.761 91.6267 109.312 91.1137 110.553L89.7458 113.824C86.8604 120.761 86.8391 128.375 89.7031 135.255L92.6526 142.53C96.2006 150.99 96.2433 160.352 92.8236 168.868Z" fill="#8E2209"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_11_156">
      <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
      </clipPath>
      <clipPath id="clip1_11_156">
      <rect width="47" height="93" fill="white" transform="translate(66 94)"/>
      </clipPath>
      </defs>
    </svg>
  },

  { 
    id: 2, 
    title: 'KOKTEJ', 
    link: "/KOKTEJ",
    svg: 
    <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_11_157)">
      <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
      <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
      <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
      <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
      <g clip-path="url(#clip1_11_157)">
      <path d="M90.9294 142.686L90.8226 142.808V172.837H101.182C101.945 172.837 102.57 173.55 102.57 174.419C102.57 175.287 101.945 176 101.182 176H77.6866C76.9238 176 76.2982 175.287 76.2982 174.419C76.2982 173.55 76.9238 172.837 77.6866 172.837H88.0459V142.791L66.3662 115.976C66.1068 115.664 66 115.264 66 114.847C66.0153 114.412 66.1678 114.03 66.4424 113.735C66.7171 113.457 67.0527 113.318 67.4341 113.318C67.8155 113.335 68.1512 113.526 68.4106 113.839L89.4342 139.819L109.665 113.856C110.168 113.196 111.053 113.144 111.633 113.717C111.907 113.995 112.075 114.395 112.09 114.812C112.121 115.229 111.984 115.646 111.739 115.959L90.9294 142.686Z" fill="#8E2209"/>
      <path d="M118.834 113.196C118.483 113.961 117.613 114.256 116.957 113.856L114.989 112.675C113.341 111.684 111.602 111.18 109.863 111.18C108.124 111.18 106.278 111.719 104.569 112.779L102.967 113.787C102.28 114.204 101.441 113.926 101.075 113.161C100.694 112.397 100.953 111.423 101.624 111.006L103.226 109.998C107.437 107.374 112.075 107.322 116.301 109.877L118.254 111.059C118.941 111.476 119.2 112.431 118.834 113.196Z" fill="#8E2209"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_11_157">
      <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
      </clipPath>
      <clipPath id="clip1_11_157">
      <rect width="53" height="68" fill="white" transform="translate(66 108)"/>
      </clipPath>
      </defs>
    </svg>


  },

  { 
    id: 3, 
    title: 'BREAKFAST', 
    link: "/breakfast",
    svg: 
    <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_11_172)">
      <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
      <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
      <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
      <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
      <g clip-path="url(#clip1_11_172)">
      <path d="M99.4525 116.53L99.3241 116.022C99.1957 115.532 99.0673 115.061 98.9175 114.59C98.6607 113.855 98.3825 113.101 98.0186 112.291C97.933 112.122 97.8474 111.933 97.7618 111.764C97.3338 110.822 96.9057 110.049 96.4777 109.314C96.4563 109.314 96.4349 109.258 96.3921 109.22C96.3493 109.145 96.3279 109.088 96.2851 109.051L93.7597 105H84.3001L81.7319 109.107C81.7319 109.107 81.6463 109.201 81.6035 109.239C79.8272 112.122 78.7357 115.08 78.2648 118.075C78.2434 118.151 78.2434 118.226 78.222 118.301V118.509C78.0936 119.338 78.0294 120.148 78.008 120.958V121.372C77.9866 122.013 78.008 122.654 78.0722 123.294C78.4789 128.362 81.0685 133.468 85.3488 137.651L85.7983 138.046H87.3606V194.549C87.3606 195.341 88.1096 196 89.0085 196C89.9074 196 90.6564 195.341 90.6564 194.549V138.046H92.2616L92.7538 137.557C94.0165 136.332 95.1722 134.957 96.1781 133.449L96.3921 133.167C96.3921 133.167 96.4349 133.072 96.4777 133.016C97.0342 132.149 97.5478 131.245 97.9758 130.359C98.4467 129.361 98.8319 128.4 99.1101 127.439H99.688L99.1529 127.307C99.4097 126.516 99.6024 125.668 99.7522 124.801C99.8164 124.387 99.8592 123.972 99.902 123.577L99.9448 123.294C99.9448 123.294 99.9448 123.106 99.9448 123.012V122.767C100.095 120.694 99.9448 118.603 99.4311 116.53H99.4525ZM96.6703 123.087C96.6275 123.558 96.5633 124.029 96.4991 124.481C96.3707 125.065 96.2423 125.743 96.0283 126.441C96.0069 126.516 95.9855 126.61 95.9427 126.704L95.8999 126.836C95.3862 128.381 94.6372 129.964 93.6527 131.528C92.8394 132.771 91.9405 133.939 90.9347 134.994L90.7848 135.164H87.2322L87.061 134.994C86.2049 134.071 85.3916 133.072 84.6426 131.999L84.557 131.791C82.909 129.267 81.8603 126.61 81.4537 123.935C81.3467 123.238 81.2825 122.503 81.2825 121.58C81.2825 121.222 81.2825 120.883 81.3039 120.525C81.3253 120.091 81.3681 119.696 81.4109 119.281C81.4537 118.886 81.5179 118.49 81.5821 118.094C81.7319 117.265 81.9031 116.587 82.0958 115.946L82.16 115.739C82.7378 113.93 83.5939 112.122 84.7068 110.332L86.2477 107.883H91.8335L93.3531 110.332C93.8239 111.086 94.2519 111.858 94.7014 112.781L94.7442 112.894C94.8298 113.064 94.9154 113.233 94.9796 113.403C95.215 113.912 95.4076 114.439 95.6002 114.948C96.5419 117.623 96.9057 120.355 96.6703 123.087Z" fill="#8E2209"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_11_172">
      <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
      </clipPath>
      <clipPath id="clip1_11_172">
      <rect width="22" height="85" fill="white" transform="translate(78 105)"/>
      </clipPath>
      </defs>
    </svg>
  },

  { 
    id: 4, 
    title: 'SALADS', 
    link: "/sallata",
    svg: 
    <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_11_172)">
      <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
      <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
      <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
      <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
      <g clip-path="url(#clip1_11_172)">
      <path d="M101 109.308V134.899C101 137.787 99.7975 140.499 97.6296 142.541C95.8851 144.184 93.6834 145.237 91.2445 145.572L90.8888 145.636V196.754C90.8888 197.472 90.2622 198.062 89.5 198.062C88.7378 198.062 88.1112 197.472 88.1112 196.754V138.903L87.7555 138.856C85.3166 138.505 83.1149 137.468 81.3704 135.824C79.2025 133.782 78 131.07 78 128.166V109.308C78 108.59 78.6267 108 79.3888 108C80.151 108 80.7607 108.59 80.7607 109.308V128.166C80.7607 130.368 81.6753 132.426 83.3181 133.99C84.5037 135.09 85.9772 135.856 87.6031 136.191L88.1112 136.303V109.308C88.1112 108.59 88.7378 108 89.5 108C90.2622 108 90.8719 108.59 90.8719 109.308V143.02L91.3969 142.924C93.0059 142.589 94.4963 141.823 95.6649 140.706C97.3247 139.159 98.2224 137.085 98.2224 134.899V109.308C98.2224 108.59 98.849 108 99.6112 108C100.373 108 101 108.59 101 109.308Z" fill="#8E2209"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_11_172">
      <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
      </clipPath>
      <clipPath id="clip1_11_172">
      <rect width="23" height="82" fill="white" transform="translate(78 108)"/>
      </clipPath>
      </defs>
    </svg>

     },

     { 
      id: 5, 
      title: 'STARTERS', 
      link: "/starters",
      svg: 
      <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11_157)">
        <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
        <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
        <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
        <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
        <g clip-path="url(#clip1_11_157)">
        <path d="M106.475 136.178C94.4952 129.166 81.3462 129.286 69.4214 136.516L64 139.81V142.321L70.5253 146.147C76.3948 149.574 82.5267 151.312 88.7678 151.312C95.0089 151.312 101.545 149.466 107.579 145.797L113 142.514V140.003L106.475 136.178ZM106.715 144.071C100.944 147.583 94.8559 149.333 88.7678 149.333C82.6797 149.333 76.9851 147.691 71.3669 144.397L65.6505 141.053L70.2849 138.253C81.6522 131.338 94.211 131.229 105.633 137.916L111.35 141.271L106.715 144.071Z" fill="#8E2209"/>
        <path d="M108.016 149.9L103.993 153.11C99.0968 157.021 93.9596 159 88.7131 159C83.4666 159 78.6573 157.141 73.9027 153.472L69.006 149.695C68.6562 149.429 68.525 148.814 68.6999 148.331C68.7983 148.066 68.9732 147.872 69.1918 147.8C69.2464 147.8 69.3011 147.776 69.3667 147.776C69.4869 147.776 69.6071 147.812 69.7164 147.909L74.6241 151.686C83.8819 158.819 94.047 158.698 103.25 151.336L107.273 148.126C107.382 148.029 107.513 147.993 107.633 147.993C107.688 147.993 107.753 147.993 107.808 148.017C108.016 148.078 108.191 148.271 108.289 148.536C108.475 149.019 108.344 149.622 108.016 149.9Z" fill="#8E2209"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_11_157">
        <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
        </clipPath>
        <clipPath id="clip1_11_157">
        <rect width="49" height="28" fill="white" transform="translate(64 131)"/>
        </clipPath>
        </defs>
      </svg>
       },
    
       { 
        id: 6, 
        title: 'PASTA & RISOTTO', 
        link: "/pasta",
        svg: 
        <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11_156)">
          <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
          <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
          <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
          <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
          <path d="M101.288 140.704L101.959 137.941L100.659 136.873L98.1688 137.733C95.569 138.641 93.4208 140.114 91.7925 142.103L91.3409 142.656L90.7799 140.335C90.5473 139.402 90.2052 138.494 89.74 137.548L89.5895 137.254L92.3124 136.296C96.992 134.676 100.194 131.263 101.316 126.683L102 123.933L100.7 122.853L98.2098 123.725C96.3079 124.387 94.6249 125.37 93.1881 126.659L91.943 127.788L92.6271 126.327C94.4607 122.472 94.2965 118.286 92.1756 114.541L90.7526 112H88.9601L87.7149 114.185C85.3478 118.31 85.3341 122.865 87.6602 126.99L89.0969 129.532H90.7936L90.5336 129.961C89.9453 131.029 89.4937 132.159 89.2064 133.337L88.6317 135.682L88.1938 135.13C86.5519 133.116 84.4036 131.631 81.7765 130.722L79.2999 129.863L78 130.931L78.6705 133.681C79.7925 138.261 82.9943 141.674 87.6739 143.306L90.3694 144.239L90.2189 144.534C89.7537 145.492 89.4116 146.412 89.179 147.358L88.618 149.629L88.1665 149.089C86.5382 147.1 84.4036 145.639 81.8039 144.73L79.3273 143.871L78.0274 144.951L78.6978 147.702C79.8198 152.269 83.0217 155.694 87.7013 157.314L90.52 158.297L90.3831 158.591C89.9453 159.487 89.6306 160.335 89.4116 161.194L88.8643 163.453V163.514V175.006C88.878 175.546 89.3706 176 89.9863 176C90.6021 176 91.1083 175.546 91.1083 174.993V164.533L92.4356 164.067C96.8962 162.52 99.9475 159.254 101.029 154.884L101.672 152.244L100.399 151.176L97.9909 152.011C95.4732 152.895 93.4071 154.319 91.8472 156.259L91.3957 156.811L90.7936 154.356C90.561 153.41 90.2189 152.49 89.7537 151.544L89.6032 151.25L92.2714 150.317C96.951 148.684 100.139 145.271 101.275 140.704H101.288ZM98.7161 125.701L99.3318 125.468L99.1402 126.254C98.2098 130.047 95.5964 132.908 91.8062 134.332L91.2041 134.553L91.3957 133.767C92.3261 129.974 94.9259 127.113 98.7161 125.701ZM90.301 126.143L90 126.696L89.6579 126.082C87.7149 122.656 87.6739 118.851 89.5348 115.388L89.8358 114.836L90.1505 115.388C92.1209 118.875 92.1619 122.681 90.301 126.143ZM88.1802 141.33C84.39 139.918 81.7902 137.045 80.8461 133.251L80.6545 132.466L81.2702 132.699C85.0604 134.111 87.6602 136.984 88.5906 140.777L88.7822 141.551L88.1802 141.33ZM88.2075 155.338C84.4173 153.926 81.8176 151.053 80.8871 147.272L80.6956 146.486L81.2976 146.707C85.0878 148.131 87.6876 150.992 88.6317 154.785L88.8233 155.571L88.2075 155.338ZM91.6009 161.624C92.4766 158.088 94.8848 155.387 98.415 154.036L99.0308 153.791L98.8666 154.454C97.9909 158.002 95.569 160.703 92.0525 162.053L91.4367 162.287L91.6009 161.624ZM91.1631 148.573L91.3546 147.787C92.2851 143.994 94.8985 141.121 98.6887 139.709L99.2908 139.488L99.0992 140.274C98.1688 144.055 95.569 146.928 91.7651 148.34L91.1631 148.573Z" fill="#8E2209"/>
          </g>
          <defs>
          <clipPath id="clip0_11_156">
          <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
          </clipPath>
          </defs>
        </svg>
         },

         { 
          id: 7, 
          title: 'BURGERS', 
          link: "/burgers&sandwiches",
          svg: 
          <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_156)">
            <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
            <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
            <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
            <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
            <g clip-path="url(#clip1_11_156)">
            <path d="M106.01 134.99C105.95 134.48 105.87 133.98 105.74 133.44C105.08 131.35 103.72 129.45 101.93 128.11C100.07 126.73 97.8701 126 95.5601 126H84.5501C79.8801 126 75.7801 129.03 74.3401 133.54C74.2401 134.02 74.1501 134.51 74.1001 134.99L74.0601 135.36L75.9901 137.51H104.12L106.05 135.36L106.01 134.99ZM103.39 135.87H76.7201L75.7701 134.82V134.7C75.8201 134.43 75.8701 134.18 75.9101 133.98C77.1201 130.17 80.5901 127.64 84.5501 127.64H95.5601C97.5201 127.64 99.3801 128.25 100.96 129.42C102.45 130.54 103.62 132.15 104.17 133.86C104.23 134.15 104.28 134.42 104.33 134.7V134.82L103.39 135.87Z" fill="#8E2209"/>
            <path d="M104.12 149.01H75.9901L74.0601 151.16L74.1001 151.53C74.1601 152.04 74.2401 152.53 74.3701 153.07C75.0501 155.2 76.3601 157.05 78.1701 158.4C80.0301 159.78 82.2301 160.5 84.5501 160.5H95.5601C100.24 160.5 104.34 157.47 105.77 152.95C105.87 152.5 105.95 152.01 106.01 151.53L106.05 151.16L104.12 149.01ZM104.33 151.82C104.29 152.08 104.24 152.32 104.2 152.53V152.55C102.99 156.33 99.5201 158.87 95.5601 158.87H84.5501C82.5801 158.87 80.7201 158.25 79.1501 157.09C77.6401 155.96 76.5001 154.39 75.9401 152.65C75.8801 152.36 75.8301 152.09 75.7801 151.82V151.7L76.7201 150.64H103.39L104.34 151.7V151.82H104.33Z" fill="#8E2209"/>
            <path d="M106.11 145.66C106.11 146.11 105.74 146.48 105.29 146.48H74.82C74.37 146.48 74 146.11 74 145.66C74 145.21 74.37 144.85 74.82 144.85H105.29C105.74 144.85 106.11 145.21 106.11 145.66Z" fill="#8E2209"/>
            <path d="M106.11 141.99C106.11 142.44 105.74 142.81 105.29 142.81C103.22 142.81 102.13 142.34 101.16 141.93C100.22 141.52 99.41 141.18 97.67 141.18C95.93 141.18 95.12 141.52 94.17 141.93C93.21 142.34 92.12 142.81 90.05 142.81C87.98 142.81 86.88 142.34 85.91 141.92C84.97 141.52 84.16 141.18 82.43 141.18C80.7 141.18 79.88 141.52 78.94 141.93C77.98 142.34 76.89 142.81 74.82 142.81C74.37 142.81 74 142.44 74 141.99C74 141.54 74.37 141.17 74.82 141.17C76.55 141.17 77.36 140.83 78.3 140.43C79.27 140.01 80.36 139.54 82.43 139.54C84.5 139.54 85.59 140.01 86.56 140.43C87.5 140.83 88.31 141.17 90.05 141.17C91.79 141.17 92.6 140.83 93.54 140.42C94.51 140.01 95.6 139.54 97.67 139.54C99.74 139.54 100.83 140.01 101.8 140.42C102.74 140.83 103.55 141.17 105.29 141.17C105.74 141.17 106.11 141.54 106.11 141.99Z" fill="#8E2209"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_11_156">
            <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
            </clipPath>
            <clipPath id="clip1_11_156">
            <rect width="32.11" height="34.5" fill="white" transform="translate(74 126)"/>
            </clipPath>
            </defs>
          </svg>
           },

           { 
            id: 8, 
            title: 'EPOQUE DISHES', 
            link: "/epoque-dishes",
            svg: 
            <svg className="w-[130px] lg:w-[185px] lg:h-[290px]" viewBox="0 0 185 290" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_11_156)">
              <path d="M88.4355 273.375C50.122 273.375 19.0679 240.428 19.0679 199.792V90.202C19.0679 49.5663 50.122 16.6191 88.4355 16.6191C126.749 16.6191 157.803 49.5663 157.803 90.202V199.792C157.803 240.434 126.749 273.375 88.4355 273.375Z" fill="#F4ECE9"/>
              <path d="M88.5169 269.376C51.923 269.376 22.2637 237.909 22.2637 199.097V90.9032C22.2637 52.0856 51.9286 20.6239 88.5169 20.6239C125.105 20.6239 154.77 52.0915 154.77 90.9032V199.097C154.77 237.909 125.105 269.376 88.5169 269.376Z" stroke="#8E2209" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M172.708 206.631C170.703 229.055 160.929 249.816 145.194 265.086C129.359 280.452 108.802 288.919 87.3209 288.919C64.4112 288.919 42.8682 279.453 26.669 262.27C10.4698 245.08 1.5468 222.234 1.5468 197.932V191.343H0.527344V197.932C0.527344 222.525 9.55678 245.645 25.9464 263.03C42.3361 280.422 64.1367 289.994 87.3209 289.994C109.054 289.994 129.852 281.432 145.883 265.882C161.808 250.434 171.695 229.424 173.728 206.732L172.714 206.631H172.708Z" fill="#8E2209"/>
              <path d="M148.695 26.9638C132.3 9.57813 110.505 0 87.3209 0C64.1367 0 42.3417 9.57813 25.9465 26.9638C9.55678 44.3553 0.527344 67.4747 0.527344 92.0677V138.259H1.5468V92.0677C1.5468 67.7659 10.4698 44.9138 26.669 27.7302C42.8682 10.5466 64.4112 1.0814 87.3209 1.0814C110.231 1.0814 131.774 10.5466 147.973 27.7302C164.172 44.9138 173.095 67.7659 173.095 92.0677V103.91H174.114V92.0677C174.114 67.4747 165.085 44.3553 148.69 26.9638" fill="#8E2209"/>
              <path d="M184.813 128.479C174.512 129.014 174.109 129.441 173.605 140.368C173.1 129.441 172.697 129.014 162.396 128.479C172.697 127.944 173.1 127.516 173.605 116.589C174.109 127.516 174.512 127.944 184.813 128.479Z" fill="#8E2209"/>
              <g clip-path="url(#clip1_11_156)">
              <path d="M95.3499 117.13L94.4199 117V169.38C94.4199 169.83 94.7799 170.2 95.2299 170.2C95.6799 170.2 96.0399 169.83 96.0399 169.38V158.05L103.71 152.05V126.83C103.71 122 100.12 117.83 95.3499 117.13ZM102.08 151.26L96.0399 155.98V118.94L96.3799 119.04C99.7299 120.1 102.08 123.3 102.08 126.83V151.26Z" fill="#8E2209"/>
              <path d="M89.66 118.2V134.36C89.66 136.18 88.95 137.89 87.66 139.18C86.63 140.22 85.31 140.88 83.86 141.1L83.65 141.13V169.64C83.65 170.09 83.28 170.46 82.83 170.46C82.38 170.46 82.02 170.09 82.02 169.64V136.89L81.8 136.85C80.35 136.64 79.04 135.98 78 134.94C76.71 133.65 76 131.94 76 130.11V118.2C76 117.75 76.36 117.39 76.81 117.39C77.26 117.39 77.63 117.75 77.63 118.2V130.11C77.63 131.5 78.17 132.81 79.15 133.79C79.86 134.49 80.74 134.98 81.71 135.19L82.01 135.25V118.2C82.01 117.75 82.38 117.38 82.83 117.38C83.28 117.38 83.65 117.75 83.65 118.2V139.5L83.95 139.43C84.92 139.22 85.8 138.74 86.51 138.03C87.49 137.05 88.03 135.74 88.03 134.36V118.2C88.03 117.75 88.4 117.38 88.84 117.38C89.28 117.38 89.66 117.75 89.66 118.2Z" fill="#8E2209"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_11_156">
              <rect width="184.286" height="290" fill="white" transform="translate(0.527344)"/>
              </clipPath>
              <clipPath id="clip1_11_156">
              <rect width="27.71" height="53.46" fill="white" transform="translate(76 117)"/>
              </clipPath>
              </defs>
            </svg>
             },
];

const Category = () => {
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
  
  return (
    <div className='2xl:mt-[-100px] overflow-hidden mt-16 lg:mt-16 justify-center items-center flex flex-col'>
  <p className='text-8xl lg:text-[150px] font-custom1 text-center text-[#8E2209]'>CATEGORY</p>
  <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-32 mt-6 lg:mt-16'>
    {categories?.map(category => (
      <div key={category.id} className='mt-6 justify-center items-center flex flex-col'>
        {category.svg}
        <Link onClick={handleClick} to={category.link} className='flex items-center mt-6'>
          <p className='lg:text-sm flex lg:block lg:w-[186px] font-custom lg:border-[1px] lg:border-[#8E2209] lg:rounded-[100%] px-6 py-2 lg:p-4 text-center text-[#201E1F] hover:bg-[#8E2209] hover:text-white hover:duration-500 cursor-pointer'>
            {category.title}
            <AiOutlineArrowUp className='ml-[1px] text-[#8E2209] lg:hidden' size={20} />
          </p>
          
        </Link>
      </div>
    ))}
  </div>
</div>
  );
};

export default Category;

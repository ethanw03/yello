'use client';
import React from 'react';
import Image from 'next/image';
import logoBlack from '../../assets/Yello_Icon_Black.png'; 
import logoWhite from '../../assets/Yello-Icon-White.png';
import backdrop from '../../assets/backdrop.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 
const Home = () => {
  return (
    
    <div className="bg-brand-white h-screen w-screen overflow-hidden flex flex-col justify-center items-center relative">
      {/* Display white logo only on smaller screens*/}
      <div className="absolute top-8 left-4 z-50 md:hidden drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <Image src={logoWhite} alt="Logo" width={70} height={70} />
      </div>
      {/* Display black logo on "md" screens and larger */}
      <div className="hidden md:block absolute top-8 left-8 z-50">
        <Image src={logoBlack} alt="Logo" width={80} height={80} />
      </div>

      <div className="absolute top-14 md:top-14 right-8 z-50 flex flex-col space-y-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {/* Menu Icon, switch color to black in md view and larger */}
        <span className="block w-8 h-0.5 md:h-1 md:w-10 md:bg-black bg-brand-white"></span>
        <span className="block w-8 h-0.5 md:h-1 md:w-10  md:bg-black bg-brand-white"></span>
        <span className="block w-8 h-0.5 md:h-1 md:w-10 md:bg-black bg-brand-white"></span>
      </div>

      {/* Image with Text Overlay */}
      <div className="relative w-full h-full lg:max-w-[75%] md:max-w-[65%] lg:max-h-[70vh] md:max-h-[60vh]">
        <Image src={backdrop} alt="Central Image" layout="fill" objectFit="cover" />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-5xl  md:text-6xl font-extralight text-clash lg:text-7xl text-brand-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">INCOMING <br></br> FALL 2024</p>
        </div>
      </div>
      <div className="absolute bottom-8 right-14 flex space-x-4 z-50">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-white hover:text-opacity-80 hover:scale-110 hover:-translate-y-2">
          <FaFacebookF size={44} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-white hover:text-opacity-80 hover:scale-110 hover:-translate-y-2">
          <FaInstagram size={44} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-white hover:text-opacity-80 hover:scale-110 hover:-translate-y-2">
          <FaTwitter size={44} />
        </a>
      </div>
    </div>
  );
};

export default Home;

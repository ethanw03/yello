'use client';
import React from 'react';
import Image from 'next/image';
import logoBlack from '../../assets/Yello_Icon_Black.png'; 
import logoWhite from '../../assets/Yello-Icon-White.png';
import backdrop from '../../assets/backdrop.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import { motion } from 'framer-motion'

const Home = () => {
  return (
    
    <div className="bg-brand-white h-lvh w-screen overflow-hidden flex flex-col justify-center items-center relative">
      {/* Logo and "YELLO" text on smaller screens */}
      <motion.div 
      initial={{x:'-100vw'}}
      animate={{x:0}}
      transition={ {duration: 2}}
      className="absolute top-8 left-4 z-50 flex items-center md:hidden hover:scale-110">
        <Image src={logoWhite} alt="Logo" width={70} height={70} />
        <div className="bg-brand-white mx-2" style={{ width: '2px', height: '24px' }}></div> {/* Line separator */}
        <span className="text-xl font-bold text-brand-white">YELLO</span> {/* Text */}
      </motion.div>
      {/* Logo and "YELLO" text on "md" screens and larger */}
      <div className="hidden md:flex absolute top-8 left-8 z-50 items-center hover:scale-110">
        <Image src={logoBlack} alt="Logo" width={100} height={100} />
        <div className="bg-black mx-3 h-24 w-0.5"></div> {/* Line separator */}
        <span className="text-6xl font-light text-black">YELLO</span> {/* Text */}
      </div>

      <div className="absolute top-14 md:top-14 right-8 z-50 flex flex-col space-y-2 hover:-translate-x-1 hover:scale-110 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {/* Menu Icon, switch color to black in md view and larger */}
        <span className="block w-8 h-0.5  md:w-10 md:bg-black bg-brand-white"></span>
        <span className="block w-8 h-0.5  md:w-10  md:bg-black bg-brand-white"></span>
        <span className="block w-8 h-0.5  md:w-10 md:bg-black bg-brand-white"></span>
      </div>

      {/* Image with Text Overlay */}
      <div className="relative w-full h-full lg:max-w-[70%] md:max-w-[65%] lg:max-h-[70vh] md:max-h-[60vh]">
        <Image src={backdrop} alt="Central Image" layout="fill" objectFit="cover" />
        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <div className="text-5xl md:text-6xl font-extralight text-clash lg:text-7xl text-brand-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
    <div>INCOMING</div>
    <div>FALL 2024</div>
  </div>
</div>
      </div>
      <div className="absolute bottom-8 right-14 flex space-x-4 z-50">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-brand-white hover:text-opacity-80 hover:scale-110 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:-translate-y-2">
          <FaFacebookF size={44} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-brand-white hover:text-opacity-80 hover:scale-110 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:-translate-y-2">
          <FaInstagram size={44} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="md:text-black text-brand-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-opacity-80 hover:scale-110  hover:-translate-y-2">
          <FaTwitter size={44} />
        </a>
      </div>
    </div>
  );
};

export default Home;

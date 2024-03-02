'use client'

import React, { useEffect} from 'react';
import Image from 'next/image';
import logoImage from '../../../assets/Yello-Icon-White.png';
import { Typewriter } from 'react-simple-typewriter'
import CountUp from 'react-countup';
import { motion } from 'framer-motion'


import SplitType from 'split-type'


const LogoAnimation: React.FC = () => {
  

   const logoVariants = {
    hidden: { scale: 1, opacity: 1 }, 
    visible: { 
      scale: [1, 20],
      opacity: [1, 0],
      transition: { duration: 1, ease: "easeInOut" } 
    }
  };
  
  const stars = Array.from({ length: 400 }).map((_, index) => ({
    id: index,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * (3 - 1.5) + 1.5}s`,
      animationDelay: `${Math.random() * 2}s`,
    },
  }));

  
    
  return (
    <div className='bg-black w-full h-screen flex justify-center items-center overflow-hidden relative'>
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style}></div>
      ))}
      
      <div className='flex flex-col place-items-end items-center relative  z-20 space-y-8'>
        <motion.div>
        <div className='animate-pulse'>
        <Image src={logoImage} alt='logo' width={300} height={300}  className='rotate opacity-90  '/>
        </div></motion.div>
        <div className=' z-50 '>
          <motion.div key="text"
                    initial={{ opacity: 0, y:0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y:'-10vh'}}
                    transition={{ duration: .5 }} 
                    className='relative  text-brand-white text-6xl  lg:text-7xl xl:text-8xl font-extralight'>
          <span  className='justify-center relative top-8  left-3 h-full w-full before:bg-black opacity-75'><Typewriter
            words={['HELLO','WELCOME', 'TO' ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={55}
            deleteSpeed={30}
            delaySpeed={1000}
          /></span>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-8 right-8 text-white lg:text-4xl md:text-3xl text-2xl font-light opacity-85 font-clash">
         <CountUp end={100} duration={6} />
      </div>
    </div>
  );
};

export default LogoAnimation;

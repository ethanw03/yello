'use client'

import React, { useEffect} from 'react';
import Image from 'next/image';
import logoImage from '../../../assets/Yello-Icon-White.png';
import { Typewriter } from 'react-simple-typewriter'

import SplitType from 'split-type'


const LogoAnimation: React.FC = () => {
  
  
  const stars = Array.from({ length: 300 }).map((_, index) => ({
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

      <div className='flex flex-col place-items-end items-center relative  space-y-8'>
        
        <div className='animate-pulse'>
        <Image src={logoImage} alt='logo' width={300} height={300}  className='rotate opacity-95  '/>
        </div>
        <div className=' '>
          <div className='relative  text-brand-white text-6xl  lg:text-7xl font-extralight'>
          <span  className='right-32 absolute  h-full w-full before:bg-black opacity-75'><Typewriter
            words={['WELCOME','CREATE', 'EXPLORE',  'YELLO.' ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1750}
          /></span>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LogoAnimation;

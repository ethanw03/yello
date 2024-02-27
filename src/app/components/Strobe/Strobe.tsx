'use client';

import React, { useEffect, useState } from 'react';

type StrobeProps = {};

const backgrounds = ['bg-brand-yellow', 'bg-brand-red']; 

const Strobe: React.FC<StrobeProps> = ({}) => {
  const [bgClass, setBgClass] = useState(backgrounds[0]);
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setBgClass(backgrounds[count % backgrounds.length]);
      count++;
      if (count === 15) {
        clearInterval(interval);
        setBgClass('bg-brand-white');
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full h-screen ${bgClass} flex justify-center items-center`}>
      
      <div className='lg:text-9xl text-7xl font-clash font-medium text-brand-black flex items-center border-brand-black lg:border-y-4 border-y-2 relative'>
        
        <span>YELL</span>
        
        <span className='animate-bounce inline-block ml-1'>O</span>
      </div>
    </div>
  );
};

export default Strobe;

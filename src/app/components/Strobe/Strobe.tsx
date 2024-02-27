'use client'

import React, { useEffect, useState } from 'react';

type StrobeProps = {
};

const backgrounds = ['bg-brand-yellow', 'bg-brand-red']; 

const Strobe: React.FC<StrobeProps> = ({}) => {
  const [bgClass, setBgClass] = useState(backgrounds[0]);
  useEffect(() => {
    let count = 0; 
    const interval = setInterval(() => {
      setBgClass(backgrounds[count % backgrounds.length]);
      count++;
      if (count === 10) clearInterval(interval);
    }, 150); 

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={`w-full h-screen ${bgClass}`}>
      <div className='flex justify-center text-9xl font-clash font-medium h-screen items-center text-brand-black '>
        <div className='border-brand-black border-y-4  '>YELLO</div>
        </div>
    </div>
  );
};

export default Strobe;

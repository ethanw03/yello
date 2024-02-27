'use client';

import React, { useEffect, useState } from 'react';

type StrobeProps = {
};

const backgrounds = ['bg-brand-yellow', 'bg-brand-red']; 

const Strobe: React.FC<StrobeProps> = ({}) => {
  const [bgClass, setBgClass] = useState(backgrounds[0]);
  useEffect(() => {
    let count = 0;
    // Define the interval to cycle through the backgrounds
    const interval = setInterval(() => {
      // Update the background class based on the current count
      setBgClass(backgrounds[count % backgrounds.length]);
      count++;
      // Once the count reaches 10, clear the interval and set the background to bg-brand-white
      if (count === 15) {
        clearInterval(interval);
        // Set the background to bg-brand-white after the last cycle
        setBgClass('bg-brand-white');
      }
    }, 120); // Change background every 150ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={`w-full h-screen ${bgClass}`}>
      <div className='flex justify-center lg:text-9xl text-7xl font-clash font-medium h-screen items-center text-brand-black '>
        <div className='border-brand-black lg:border-y-4 border-y-2'>YELLO</div>
      </div>
    </div>
  );
};

export default Strobe;

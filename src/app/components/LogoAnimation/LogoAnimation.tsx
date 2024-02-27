import React from 'react';
import Image from 'next/image';
import logoImage from '../../../assets/Yello-Icon-White.png';
import TypewriterText from '../../../utils/TypewriterText';

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

      <div className='flex flex-col place-items-end items-center relative animate-pulse space-y-4'>
        {/* Add custom delay for "WELCOME" */}
        <div className='flex justify-center align-top'><TypewriterText text="WELCOME" className="mb-8" delay={8800} /></div>
        <div>
        <Image src={logoImage} alt='logo' width={200} height={200} layout='responsive' className='rotate opacity-95'/></div>
        <div className='flex justify-center '>
        {/* Add custom class for additional vertical spacing */}
        <TypewriterText text="HOME." className="mt-8" /> {/* Move "HOME." down */}</div>
      </div>
    </div>
  );
};

export default LogoAnimation;

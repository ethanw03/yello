'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../assets/Yello_Icon_Black.png';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-between items-center">
   
      <motion.div 
      key="logonav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
      className="absolute top-8 left-8">
        <Image src={logo} alt="Logo" width={64} height={64} />
      </motion.div>

   
      <div className="absolute top-8 right-8">
      
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black"></div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type StrobeProps = {
  onCompleted: () => void;
};

const Strobe: React.FC<StrobeProps> = ({ onCompleted }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation sequence on component mount
    const sequence = async () => {
      // Strobe effect: alternate between red and yellow
      await controls.start({
        backgroundColor: ["red", "yellow"],
        transition: { duration: 0.15, repeat: 9, repeatType: "reverse" }
      });
      onCompleted(); // Call onCompleted after the animation
    };

    sequence();
  }, [controls, onCompleted]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      animate={controls}
      style={{ width: '100%', height: '100vh' }} 
    >
      <h1 className="text-6xl font-bold">Yello</h1>
    </motion.div>
  );
};

export default Strobe;

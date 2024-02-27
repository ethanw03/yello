'use client'
import React, { useEffect, useState } from 'react';

// Update the props type definition to include className
interface TypewriterTextProps {
  text: string;
  className?: string; 
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = '', delay = 250 }) => {
  const [displayedText, setDisplayedText] = useState(text.charAt(0));
  const [loop, setLoop] = useState(false);

   useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText(text.charAt(0));
          setLoop((prev) => !prev);
        }, 2000); // Pause at the end before looping
      }
    }, delay); // Use delay prop here

    return () => clearInterval(interval);
  }, [text, loop, delay]);

  return <div className={`typewriter-text ${className}`}>{displayedText}</div>;
};

export default TypewriterText;

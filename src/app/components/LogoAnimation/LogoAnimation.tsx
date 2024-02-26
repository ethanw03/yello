import Image from 'next/image';
import { motion } from 'framer-motion';
import logoImage from '../../../assets/Yello_Icon_Black.png';

const LogoAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen"> {/* Full viewport container with flexbox to center content */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, ease: "linear", repeat: 0 }}
        className="fixed rounded-full overflow-hidden w-40 h-40" // Circular container with fixed dimensions
      >
        <div className="flex justify-center items-center w-full h-full"> {/* Centering the logo within the circular container */}
          <Image src={logoImage} alt="Logo" width={40} height={40} layout="responsive" /> {/* Adjust the width and height of the logo */}
        </div>
      </motion.div>
    </div>
  );
};

export default LogoAnimation;

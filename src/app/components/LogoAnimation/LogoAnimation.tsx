import Image from 'next/image';
import { motion } from 'framer-motion';
import logoImage from '../../../assets/Yello_Icon_Black.png';


const LogoAnimation: React.FC = () => {
  return (
    <div className='bg-white w-full h-lvh'>
      <div className='flex justify-center h-lvh items-center'>
      <Image src={logoImage} alt='logo' className='flex h-fit'></Image>
      </div>
    </div>
  );
};

export default LogoAnimation;

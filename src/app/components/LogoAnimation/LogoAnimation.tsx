import Image from 'next/image';
import logoImage from '../../../assets/Yello_Icon_Black.png';

const LogoAnimation: React.FC = () => {
  return (
    <div className='bg-brand-white w-full h-screen flex justify-center items-center overflow-hidden mx-auto my-auto'>
     
      <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]'> 
        <Image src={logoImage} alt='logo' layout='responsive' className='rotate fill-brand-yellow'/>
      </div>
    </div>
  );
};

export default LogoAnimation;

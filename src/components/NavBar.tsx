import NavIcon from './NavIcon';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <ul className='m-0 flex h-screen w-20 flex-col items-center bg-gray-900 text-4xl text-white shadow-lg'>
      <NavIcon icon={<FaFire size='28' />} tooltip='Fireship 🔥'></NavIcon>
      <NavIcon icon={<FaPoo size='28' />} tooltip='Damn 💩'></NavIcon>
      <NavIcon icon={<BsPlus size='28' />} tooltip='Yeah! ➕'></NavIcon>
      <NavIcon
        icon={<BsFillLightningFill size='28' />}
        tooltip='Great! 🌩️'
      ></NavIcon>
    </ul>
  );
};

export default NavBar;

import type React from 'react';

const NavIcon = ({
  icon,
  tooltip = 'tooltip',
}: {
  icon: React.ReactNode;
  tooltip: string;
}) => {
  return (
    <li className='sidebar-icon group'>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>{tooltip}</span>
    </li>
  );
};

export default NavIcon;

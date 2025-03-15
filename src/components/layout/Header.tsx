import React from 'react';

interface NavOption {
  page: string;
  link: string;
}

const navOptions: readonly NavOption[] = [
  { page: 'Roles', link: '/roles' },
  { page: 'Jobs', link: '/jobs' },
  { page: 'Forum', link: '/forum' },
  { page: 'Resources', link: '/resources' },
  { page: 'About', link: '/about' }
  // { page: 'Contact', link: '/contact' }
];

const Header: React.FC = () => {
  return (
    <nav className="bg-theme h-[80px] flex items-center px-[4vw] text-white">
      <ul className="flex flex-row gap-8">
        {navOptions.map((navOption, index) => (
          <li key={index} className="text-[1.4em]">
            <a href={navOption.link}>{navOption.page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

import React from 'react';

interface NavOption {
  page: string;
  link: string;
}

const navOptions: readonly NavOption[] = [
  { page: 'Home', link: '/' },
  { page: 'Roles', link: '/roles' },
  { page: 'Jobs', link: '/jobs' },
  { page: 'Forum', link: '/forum' },
  { page: 'Resources', link: '/resources' },
  { page: 'About', link: '/about' }
  // { page: 'Contact', link: '/contact' }
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-theme shadow-md z-50">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <ul className="flex flex-row gap-8">
          {navOptions.map((navOption, index) => (
            <li key={index} className="text-[1.4em] text-xl font-bold text-white">
              <a href={navOption.link}>{navOption.page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

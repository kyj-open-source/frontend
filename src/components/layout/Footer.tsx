import React from 'react';
import instagramIcon from 'assets/images/icons/instagram-icon.svg';
import twitterIcon from 'assets/images/icons/twitter-icon.svg';

interface FooterLinks {
  icon: string;
  link: string;
}

const footerLinks: readonly FooterLinks[] = [
  { icon: instagramIcon, link: 'https://www.instagram.com' },
  { icon: twitterIcon, link: 'https://www.twitter.com' }
];

const Footer: React.FC = () => {
  return (
    <div className="h-[150px] flex items-center bg-[#012E40] justify-center">
      <ul className="flex justify-center space-x-4">
        {footerLinks.map((footerLink, index) => (
          <li key={index}>
            <a href={footerLink.link} target="_blank" rel="noopener noreferrer">
              <img src={footerLink.icon} alt="icon" height="35px" width="35px" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

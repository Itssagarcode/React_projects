import React from 'react';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <div className="mt-20 bg-pink-50">
    <div className="flex flex-wrap justify-center items-center gap-10 px-10 pt-6">
      <img src={Logo} alt="logo" className="w-52 h-10" />
    </div>
    <p className="text-center text-lg lg:text-2xl mt-10 pb-10">
      Made with ❤️ by Bhushan
    </p>
  </div>
);

export default Footer;

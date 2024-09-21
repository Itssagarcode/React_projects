import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <div className="flex justify-start items-center px-5 mt-5 sm:mt-8">
    <Link to="/">
      <img src={Logo} alt="logo" className="w-12 h-12 mx-5" />
    </Link>
    <div className="flex gap-10 items-end font-serif text-2xl">
      <Link
        to="/"
        className="text-red-800 border-b-4 border-red-600"
      >
        Home
      </Link>
      <a href="#exercises" className="text-red-800">
        Exercises
      </a>
    </div>
  </div>
);

export default Navbar;

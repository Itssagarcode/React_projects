import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p>Your blog app description goes here...</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Blog App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
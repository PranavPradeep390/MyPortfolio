import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md fixed w-full z-10 top-0 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
            <div className=''>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold font_main text-slate-300 ">Pranav Pradeep</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="py-5 px-3 text-slate-300 hover:text-gray-900 font_main">Home</a>
              <a href="/aboutme" className="py-5 px-3 text-slate-300 hover:text-gray-900 font_main">About Me</a>
              <a href="/services" className="py-5 px-3 text-slate-300 hover:text-gray-900 font_main">Services</a>
              <a href="/contact" className="py-5 px-3 text-slate-300 hover:text-gray-900 font_main">Contact</a>
            </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isOpen ? (
                <svg className="w-6 h-6 text-slate-300 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-300 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="/" className="block py-2 px-4 text-sm text-slate-300 hover:bg-gray-200 font_main">Home</a>
        <a href="/aboutme" className="block py-2 px-4 text-sm text-slate-300  hover:bg-gray-200 font_main">About Me</a>
        <a href="/services" className="block py-2 px-4 text-sm text-slate-300  hover:bg-gray-200 font_main">Services</a>
        <a href="/contact" className="block py-2 px-4 text-sm text-slate-300  hover:bg-gray-200 font_main">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

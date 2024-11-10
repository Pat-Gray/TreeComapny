/* eslint-disable react/prop-types */
import { useState } from 'react';

import logo from '../assets/logo.png';


const Nav = ({isDialogOpen, setDialogOpen, MyDialog}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of your navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            <img 
              src={logo} 
              alt="Tree Company Logo" 
              className="h-20 w-auto"
            />
            <span className="font-bold text-2xl text-black">Tree Company <br/><span className="text-lg">
              Wanaka | Hawea
              </span>
              </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#2B5329] transition-colors font-semibold"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-[#2B5329] transition-colors font-semibold"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#2B5329] transition-colors font-semibold"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#2B5329] transition-colors font-semibold"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
          <MyDialog isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} text="Book a Free Quote"/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#2B5329] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white shadow-lg rounded-b-xl`}
        >
          <div className="p-4 space-y-3">
            
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-[#2B5329] hover:bg-gray-50 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-[#2B5329] hover:bg-gray-50 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-[#2B5329] hover:bg-gray-50 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
            <div className="pt-2">
              <MyDialog 
                isDialogOpen={isDialogOpen} 
                setDialogOpen={setDialogOpen} 
                text={
                  <span className="flex items-center justify-center w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Free Quote
                  </span>
                }
              />
            </div>
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Nav;

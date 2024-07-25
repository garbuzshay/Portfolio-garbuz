import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Shay Garbuz</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          <button 
            onClick={toggleTheme} 
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon 
              icon={theme === 'light' ? faMoon : faSun} 
              className="text-gray-800 dark:text-gray-200"
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <a href="#home" onClick={handleLinkClick} className="text-white text-xl">Home</a>
          <a href="#about" onClick={handleLinkClick} className="text-white text-xl">About</a>
          <a href="#skills" onClick={handleLinkClick} className="text-white text-xl">Skills</a>
          <a href="#projects" onClick={handleLinkClick} className="text-white text-xl">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="text-white text-xl">Contact</a>
          <button 
            onClick={() => { handleLinkClick(); toggleTheme(); }} 
            className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon 
              icon={theme === 'light' ? faMoon : faSun} 
              className="text-gray-800 dark:text-gray-200"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

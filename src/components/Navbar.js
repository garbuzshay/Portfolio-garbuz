import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Shay Garbuz</div>
        <nav className="space-x-4 flex items-center">
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
    </header>
  );
};

export default Navbar;

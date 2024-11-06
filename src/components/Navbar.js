import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
    <header className="bg-sky-200 bg-opacity-50 dark:bg-gray-800 shadow fixed w-full z-10 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Shay Garbuz
        </div>

        {/* Mobile Menu Button and Dark/Light Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full   focus:outline-none transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              className="text-gray-800 dark:text-gray-200"
            />
          </button>

          <div className="relative">
            {/* Maintain button space by using visibility */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none w-10 h-10 flex items-center justify-center"
            >
              {!isOpen && (
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-gray-800 dark:text-gray-200"
                  size="lg"
                />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center md:space-x-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 font-semibold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          {/* Keep Dark/Light Mode Toggle in Desktop */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full  focus:outline-none transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              className="text-gray-800 dark:text-gray-200"
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-start p-4">
          {" "}
          {/* Changed justify-end to justify-start */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

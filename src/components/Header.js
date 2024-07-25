import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Shay Garbuz</div>
        <nav>
          <a href="#home" className="px-3 py-2">Home</a>
          <a href="#about" className="px-3 py-2">About</a>
          <a href="#skills" className="px-3 py-2">Skills</a>
          <a href="#projects" className="px-3 py-2">Projects</a>
          <a href="#contact" className="px-3 py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

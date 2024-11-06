import React, { useContext } from "react";
import { ThemeContext } from "../App"; // Ensure the ThemeContext path is correct

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  return (
    <footer className={`py-1 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-sky-200 text-gray-800"}`}>
      <div className="container mx-auto text-center p-4">
        <p>&copy; 2024 Shay Garbuz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

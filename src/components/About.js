import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section id="about" className="py-20 dark:from-gray-700 dark:to-gray-900">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="leading-relaxed flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4">
          <i className="fas fa-graduation-cap mr-2"></i>
          System Information Engineering student with a passion for technology
          and coding.
        </p>
        <p className="leading-relaxed flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4">
          <i className="fas fa-code mr-2"></i>
          Skilled in teamwork, coding, and data analysis.
        </p>
        <p className="leading-relaxed flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4">
          <i className="fas fa-laptop mr-2"></i>
          Specializes in building landing pages for small businesses, with a focus on accessibility and responsive design.
        </p>
        <p className="leading-relaxed flex items-center justify-center text-lg sm:text-xl lg:text-2xl">
          <i className="fas fa-rocket mr-2"></i>
          Ready to take on new challenges and contribute to teams with technical expertise.
        </p>
      </div>
    </section>
  );
};

export default About;

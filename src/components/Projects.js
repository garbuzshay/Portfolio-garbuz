import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Exam Management System (CEMS)</h3>
            <p className="leading-relaxed">Java-based exam management system with MySQL database integration.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Recipe Sharing and Meal Planner Platform</h3>
            <p className="leading-relaxed">Web-based recipe sharing platform using React.js, Tailwind, Node.js, Express, and Firebase.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

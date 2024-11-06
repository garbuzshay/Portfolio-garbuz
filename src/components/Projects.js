import React from 'react';
import projectPdf from '../utils/projectforprotf.pdf';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* R-U-SAFE?! Project */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">R-U-Safe?! Emergency Status Platform</h3>
            <p className="leading-relaxed mb-2">
              Real-time emergency notification system using Next.js, MongoDB, and serverless functions to streamline safety updates during alerts.
            </p>
            <p>
              <a 
                href="https://r-u-s.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Visit the platform
              </a>
            </p>
          </div>

          {/* CEMS Project */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Exam Management System (CEMS)</h3>
            <p className="leading-relaxed mb-2">
              Java-based exam management system with MySQL database integration.
            </p>
            <p>
              <a 
                href={projectPdf} 
                download 
                className="text-blue-500 hover:underline"
              >
                Download the user book (PDF)
              </a>
            </p>
          </div>
          
          {/* Recipe Sharing Platform Project */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Recipe Sharing and Meal Planner Platform</h3>
            <p className="leading-relaxed mb-2">
              Web-based recipe sharing platform using React.js, Tailwind, Node.js, Express, and Firebase.
            </p>
            <p>
              <a 
                href="https://recipe-platform-seven.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Visit and enjoy the platform
              </a>
            </p>
          </div>
          
          {/* Museum CMS/CRM Project */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">CMS, CRM & Interactive Guide for Museum Management</h3>
            <p className="leading-relaxed mb-2">
              Full-stack system for museum management and user engagement, featuring a CRM, CMS, and visitor app.
            </p>
            <p>
              <a 
                href="https://final-project-jwpy.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Visit the CRM & CMS System
              </a>
            </p>
            <p>
              <a 
                href="https://mensch-visitors.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Explore the Visitor App
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
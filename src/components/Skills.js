import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLaptopCode, faFire, faCloud, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faJava, faPython, faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import cSharpIcon from '../utils/c-sharp-c.png';  // Importing C# PNG as a regular image
import tsIcon from '../utils/pngwing.com.png';   // Importing TypeScript PNG

const Skills = () => {
  const skills = [
    { icon: faCuttlefish, name: 'C' },
    { icon: cSharpIcon, name: 'C#', isCustomIcon: true }, // Custom PNG for C#
    { icon: faPython, name: 'Python' },
    { icon: faJava, name: 'Java' },
    { icon: faJsSquare, name: 'JavaScript' },
    { icon: tsIcon, name: 'TypeScript', isCustomIcon: true }, // Adding TypeScript icon
    { icon: faHtml5, name: 'HTML' },
    { icon: faReact, name: 'React' },
    { icon: 'https://img.icons8.com/color/48/nextjs.png', name: 'Next.js', isCustomIcon: true }, // Using external Next.js image
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faCloud, name: 'Express' },
    { icon: faDatabase, name: 'SQL' },
    { icon: faLeaf, name: 'MongoDB' },
    { icon: faFire, name: 'Firebase' },
    { icon: faCss3Alt, name: 'CSS' },
    { icon: faLaptopCode, name: 'Unix' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center">
              {skill.isCustomIcon ? (
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4 object-contain" 
                  style={{ filter: skill.name === 'Next.js' ? 'invert(49%) sepia(89%) saturate(2744%) hue-rotate(177deg) brightness(70%) contrast(97%)' : 'none' }} // Apply filter to Next.js
                />
              ) : (
                <FontAwesomeIcon icon={skill.icon} className="text-blue-500 text-6xl mb-4" />
              )}
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

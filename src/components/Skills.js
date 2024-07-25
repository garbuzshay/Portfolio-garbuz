import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLaptopCode, faFire, faCloud, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faJava, faPython, faCuttlefish } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { icon: faCuttlefish, name: 'C' },
    { icon: faCuttlefish, name: 'C#' },
    { icon: faJava, name: 'Java' },
    { icon: faLaptopCode, name: 'Unix' },
    { icon: faDatabase, name: 'SQL' },
    { icon: faPython, name: 'Python' },
    { icon: faHtml5, name: 'HTML' },
    { icon: faJsSquare, name: 'JavaScript' },
    { icon: faCss3Alt, name: 'CSS' },
    { icon: faReact, name: 'React' },
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faLeaf, name: 'MongoDB' }, // Using a solid icon as a placeholder for MongoDB
    { icon: faFire, name: 'Firebase' }, // Using a solid icon as a placeholder for Firebase
    { icon: faCloud, name: 'Express' }, // Using a solid icon as a placeholder for Express
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="m-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
              <FontAwesomeIcon icon={skill.icon} className="text-blue-500 text-4xl mb-2" />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

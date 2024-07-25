import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-5xl font-extrabold mb-8">Contact</h2>
        <p className="leading-relaxed text-xl mb-12">Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="mailto:Garbuzshay@gmail.com" className="text-2xl text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300">Garbuzshay@gmail.com</a>
          <a href="https://www.linkedin.com/in/garbuz-shay" className="text-2xl text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/garbuzshay" className="text-2xl text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

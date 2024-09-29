// import React from 'react';
// import Shay from '../utils/Shay.jpg';

// const Home = () => {
//   return (
//     <div id="home" className="bg-gradient-to-tr from-blue-400 to-blue-600 dark:from-gray-700 dark:to-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
//       <div className="text-center">
//         <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full mx-auto mb-4 border-4 border-white overflow-hidden">
//           <img src={Shay} alt="Shay Garbuz" className="w-full h-full object-cover object-top" />
//         </div>
//         <h1 className="text-5xl font-bold mb-2">Hi, I'm Shay Garbuz</h1>
//         <p className="text-2xl mb-4">System Information Engineering</p>
//         <a href="#contact" className="inline-block px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-gray-100 font-semibold rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import Shay from '../utils/Shay.jpg';
import '../App.css'; // Import the global styles including the wave animation

const Home = () => {
  return (
    <div id="home" className="relative bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="wave-container absolute inset-0 z-0">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="wave absolute bottom-0 left-0 w-[200%] h-full bg-white bg-opacity-5 rounded-[40%]"
            style={{
              animationDuration: `${12 + index * 2}s`,
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
              animationDelay: `${index * -5}s`,
            }}
          />
        ))}
      </div>
      <div className="text-center relative">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full mx-auto mb-4 border-4 border-white overflow-hidden">
          <img src={Shay} alt="Shay Garbuz" className="w-full h-full object-cover object-top" />
        </div>
        <h1 className="text-5xl font-bold mb-2">Hi, I'm Shay Garbuz</h1>
        <p className="text-2xl mb-4">System Information Engineering</p>
        <a href="#contact" className="inline-block px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-gray-100 font-semibold rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;

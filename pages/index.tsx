// pages/index.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Section 1: Welcome */}
      <section id="home" className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      </section>

       {/* Section 2: About Me */}
       <section id="about" className="flex flex-col justify-start h-screen w-full"> {/* Adjusted styles */}
       <div className='container mt-40'>
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          Hello! I am [Your Name], a passionate developer with a focus on [your expertise]. 
          [Add a brief introduction about yourself]
        </p>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section id="skills" className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-0">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section id="contact" className="flex flex-col justify-center h-screen bg-gray-100 mt-0">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p>
          Hello! I am [Your Name], a passionate developer with a focus on [your expertise]. 
          [Add a brief introduction about yourself]
        </p>
      </section>

    </div>
  );
};

export default HomePage;

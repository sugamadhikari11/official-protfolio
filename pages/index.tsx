// pages/index.tsx
import AboutPage from '@/app/components/index_components/about';
import ContactPage from '@/app/components/index_components/contact';
import ProjectPage from '@/app/components/index_components/project';
import SkillsPage from '@/app/components/index_components/skills';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col text-center">

      {/* Section 1: Welcome */}
      <section id="home" className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      </section>

       {/* Section 2: About Me */}
       <section id="about" > {/* Adjusted styles */}
       <AboutPage/>
      </section>

      {/* Section 3: Skills */}
      <section id="skills">
        <SkillsPage/>
      </section>

      <section id="project">
        <ProjectPage/>
      </section>

      <section id="contact" >
        <ContactPage/>
      </section>

    </div>
  );
};

export default HomePage;

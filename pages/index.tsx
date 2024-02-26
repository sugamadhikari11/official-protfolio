// pages/index.tsx
import AboutPage from '@/app/components/index_components/about';
import ContactPage from '@/app/components/index_components/contact';
import ProjectPage from '@/app/components/index_components/project';
import SkillsPage from '@/app/components/index_components/skills';
import WelcomeAnimation from '@/app/components/index_components/welcome_animation';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col text-center">

      {/* Section 1: Welcome */}
      <section id="home" className="h-screen flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 z-0  hidden md:hidden lg:block">
          <WelcomeAnimation/>
        </div>
        <div className="z-10 text-center pb-10"> {/* Adjust text color and alignment as needed */}
          <h1 className="text-4xl font-bold pb-5">Welcome to My Portfolio</h1>
          <h2 className='text-3xl font-bold pb-5'>I am Sugam Adhikari</h2>
          <h2 className='text-3xl font-bold pb-5'>Just your average joe!</h2>
        </div>
      </section>


       {/* Section 2: About Me */}
       <section id="about" > 
       <AboutPage/>
      </section>

      {/* Section 3: Skills */}
      <section id="skills">
        <SkillsPage/>
      </section>

      {/* <section id="project">
        <ProjectPage/>
      </section> */}

      <section id="contact" >
        <ContactPage/>
      </section>

    </main>
  );
};

export default HomePage;

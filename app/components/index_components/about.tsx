import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const AboutPage: React.FC = () => {
  return (
    <section className="py-16 mt-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-8 sm:space-x-8">
          <div className="col-left px-4 py-4 sm:px-2">
        <div className="about-img">
        <Image
              src="/hero.png"
              alt="Hero"
              layout="fill"
              objectFit="cover"
              className=''
            />
        </div>
      </div>
          <div className="mt-2 text-lg text-gray-500 max-w-prose px-2 sm:px-8 text-start">
            <h1 className='capitalize text-center mb-10 justify-center text-3xl'>A Frontend And Backend Developer</h1>
            <p>Hello, I am currently studying data science in Sunway Business School affilated with Birmingham University of UK. I am quite familiar
                with react frameworks, and python. I have worked in django and sql web development, react web-development, and react native mobile app
                development. You can checkout my Projects and skills available below.
            </p>
            <div className='flex flex-col mt-10 items-center'>
            <button className="item-center bg-transparent hover:bg-crimson py-2 px-8 border border-crimson hover:border-transparent squared">
                Download Resume
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
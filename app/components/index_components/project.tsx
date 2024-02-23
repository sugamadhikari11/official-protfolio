import React from 'react';
import Slider from 'react-slick';

// Import CSS files for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ProjectPage: React.FC = () => {
    // Sample project data
    const projects = [
        { id: 1, title: 'Typing Tester', imageUrl: '/typing.png', githubLink: ' https://github.com/yourusername/project1', 
        description: 'A project made using javascript, it meaures your typing speed(wpm) and accuracy.' },
        { id: 2, title: 'College Website', imageUrl: '/college.png', githubLink: ' https://github.com/yourusername/project2', 
        description: 'A static website of the college I studied, it gave me the inspiration to create my ongoing project Forum which is using sql and django.' },
        { id: 3, title: 'Smart Yatayat', imageUrl: '/smartyatayat.png', githubLink: ' https://github.com/yourusername/project3', 
        description: 'An mobile app made using react native and firebase, has features of Authenticaton and tracking by connecting with gps realtime.' },
        // Add more projects as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className='flex flex-col items-center px-2 py-16 mt-15'>
            <div className="container mx-auto max-w-screen-lg"> {/* Adjusted container width */}
                <h1 className="text-3xl font-bold my-8">Recent Projects</h1>
                <div className="slider h-1/5"> {/* Added h-96 class */}
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.id} className="px-2">
                                <div className="bg-gray-200 p-4 rounded-lg shadow-lg relative overflow-hidden" style={{ height: '100%' }}>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 px-2 py-1 bg-blue-500 text-white rounded-bl-lg rounded-tr-lg z-10">GitHub</a>
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover mb-4 rounded-lg max-w-full" 
                                        style={{ maxHeight: '410px' }} // Conditional image height
                                    />
                                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <h2 className="text-lg font-semibold">{project.title}</h2>
                                            <p className="text-sm">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
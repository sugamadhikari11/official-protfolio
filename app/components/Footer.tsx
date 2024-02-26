import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-16 sm:rounded-2xl bg-dark m-0 sm:m-10 flex flex-col items-center text-light'>
      <div className="w-full border-b border-light mt-5 py-6"/>
      <h3 className='mt-16 font-medium capitalize text-center text-2xl sm:text-3xl lg:text-4xl px-4'>Interesting Stories | Updates | Guides</h3>
      <p className='mt-6 px-4 text-center w-full sm:w-3/5 text-sm sm:text-base'>Subscribe to learn about new technology and updates.</p>
      <form
        className='mt-6 flex flex-col items-center py-6 space-y-6 px-6 rounded-xl border mb-6 border-red-500'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className='w-full max-w-md bg-transparent focus:border-red-500 focus:ring-0 border-0 border-b mr-2 pb-1'
          placeholder="Enter Your Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <textarea
          className='w-full max-w-md bg-transparent focus:border-red-500 focus:ring-0 border-0 border-b mr-2 pb-1'
          placeholder="Your Message.."
          {...register("Description", { required: true })}
        />
        <input
          type="submit"
          className="bg-transparent border border-red-500 text-light cursor-pointer font-medium py-2 px-4 rounded transition-colors duration-300 transform hover:scale-105"
          value="Submit"
        />
      </form>
      <div className="flex space-x-4 text-xl mb-4">
        <Link href={'https://github.com/sugamadhikari11'} target={'_blank'}>
        <FaGithub className="hover:text-gray-500 hover:scale-125 cursor-pointer transition-transform duration-300" />
        </Link>
        <Link href={'https://www.facebook.com/'} target={'_blank'}>
        <FaFacebook className="hover:text-gray-500 hover:scale-125 cursor-pointer transition-transform duration-300" />
        </Link>
        <Link href={'https://www.linkedin.com/feed/?trk=404_page'} target={'_blank'}>
        <FaLinkedin className="hover:text-gray-500 hover:scale-125 cursor-pointer transition-transform duration-300" />
        </Link>
        <Link href={'https://www.instagram.com/sugam5152/?hl=en'} target={'_blank'}>
        <FaInstagram className="hover:text-gray-500 hover:scale-125 cursor-pointer transition-transform duration-300" />
        </Link>
      </div>
      <div className="w-full border-t border-light text-center mt-8 font-medium py-6 text-sm text-gray-500 ">© 2024 SugamAdhikari. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

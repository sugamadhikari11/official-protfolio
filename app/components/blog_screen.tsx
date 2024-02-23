import React from 'react';
import Image from "next/image";
import { sortBlogs } from '@/utils';
import { Blog } from 'contentlayer/generated';
import {slug} from 'github-slugger';
import Link from 'next/link';
import Tag from './elements/Tag';

interface Props {
  blogs: Blog[];
}

const BlogScreen: React.FC<Props> = ({ blogs }) => {
  // Sort the blogs by some criteria
  const sortedBlogs = sortBlogs(blogs);
  
  // Get the first blog (assuming it's the most recent one)
  const blog = sortedBlogs[0];

  // If blog or blog.image is undefined, return null
  if (!blog || !blog.image) {
    console.log('blog.image is undefined:', blog);
    return null;
  }

  // Check if blog.tags is undefined or null
  if (!blog.tags) {
    console.log('blog.tags is undefined:', blog);
    return null;
  }
  
  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0'/>
        {/* Render the Image component with blog.image */}
        <Image 
          src={blog.image.filePath.replace("../public","")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title} // Use blog title as alt text
          fill // Scale the image to fill the container
          className='w-full h-full object-center object-cover rounded-3xl -z-10' // Apply styling if needed
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          <span className='hover:scale-105 transition-all ease duration-200'>
          {blog.tags.map(tag => (
            <Tag key={tag} link={`/categories/${slug(tag)}`} name={tag}/>
          ))}
          </span>
          <Link href={blog.url} className='mt-6'>
          <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
            {blog.title}
          </h1>
          </Link>
          <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-sans'>
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogScreen;

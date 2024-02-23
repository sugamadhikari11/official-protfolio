import React from 'react';
import Image from "next/image";
import Tag from '../elements/Tag';
import {slug} from 'github-slugger';
import Link from 'next/link';

interface BlogLayoutOneProps {
  blog: any;
}

const BlogLayoutOne: React.FC<BlogLayoutOneProps> = ({ blog }) => {
  return (
    <div className='group inline-block overflow-hidden rounded-xl'>
      <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10'/>
        {/* Render the Image component with blog.image */}
        <Image 
          src={blog.image.filePath.replace("../public","")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title} // Use blog title as alt text
          width={blog.image.width}
          height={blog.image.width}
          className='w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300' // Apply styling if needed
        />

        <div className='w-full absolute z-20 p-4 xs:p-6 sm:p-10 bottom-0'>
          <span className='text-xs sm:text-sm py-1 sm:py-2'>
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}/>
          </span>
          <Link href={blog.url} className='mt-6'>
          <h2 className='font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4'>
            {blog.title}
          </h2>
          </Link>
        </div>
    </div>
  );
}

export default BlogLayoutOne;

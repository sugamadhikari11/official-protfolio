import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {format} from 'date-fns';

interface BlogLayoutThreeProps {
  blog: any; // Define blog prop as type any
}
const BlogLayoutThree: React.FC<BlogLayoutThreeProps>= ({blog}) => {
    const { theme, setTheme } = useTheme()
  return (
    <div className='group flex flex-col items-center text-dark'>
        <Link href={blog.url} className='h-full rounded-xl overflow-hidden'>
        <Image 
          src={blog.image.filePath.replace("../public","")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title} // Use blog title as alt text
          width={blog.image.width}
          height={blog.image.width}
          className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300' // Apply styling if needed
        />
        </Link>

        <div className='w-full flex flex-col mt-4'>
          <span className={`uppercase font-semibold text-xs sm-text-sm ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{blog.tags[0]}</span>
          <Link href={blog.url} className='inline-block my-1'>
          <h2 className={`font-semibold capitalize text-base sm:text-lg ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            {blog.title}
          </h2>
          </Link>

          <span className={`capitalize text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-light/50' : 'text-dark/50'}`}>
            {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
          </span>
        </div>

    </div>
  )
}

export default BlogLayoutThree; 
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {format} from 'date-fns';

interface BlogLayoutTwoProps {
  blog: any; // Define blog prop as type any
}
const BlogLayoutTwo: React.FC<BlogLayoutTwoProps>= ({blog}) => {
    const { theme, setTheme } = useTheme()
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark'>
        <Link href={blog.url} className='col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden'>
        <Image 
          src={blog.image.filePath.replace("../public","")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title} // Use blog title as alt text
          width={blog.image.width}
          height={blog.image.width}
          className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300' // Apply styling if needed
        />
        </Link>

        <div className='w-full col-span-12 lg:col-span-8'>
          <span className={`w-full inline-block uppercase font-semibold text-xs sm:text-sm ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{blog.tags[0]}</span>
          <Link href={blog.url} className='inline-block my-1'>
          <h1 className={`font-semibold capitalize text-base sm:text-lg ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            {blog.title}
          </h1>
          </Link>

          <span className={`w-full inline-block capitalize text-xs sm:text-base font-semibold ${theme === 'dark' ? 'text-light/50' : 'text-dark/50'}`}>
            {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
          </span>
        </div>

    </div>
  )
}

export default BlogLayoutTwo 
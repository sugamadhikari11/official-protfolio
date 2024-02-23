// pages/projects.tsx
import React from 'react';
import { sortBlogs } from '@/utils';
import { Blog } from 'contentlayer/generated';
import Link from 'next/link';
import BlogLayoutThree from './blog_layouts/blog_layout_three';


interface Props {
  blogs: Blog[];
}


const BlogRecent:  React.FC<Props> = ({blogs}) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
      <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
        <div className='flex w-full justify-between'>
        <h2 className='w-fit inline-block font-bold capitalize tetx-3xl md:text-4xl'>Recent Post</h2>
        <Link href="/categories/all" className='inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2
        text-base md:text-lg'>view all</Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16'>
            {
                sortedBlogs.slice(4,10).map((blog, index)=>{
                    return <article className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog}/>
                        </article>
                })
            }
        </div>
      </section>
    
  );
};

export default BlogRecent;

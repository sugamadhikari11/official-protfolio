// pages/projects.tsx
import React from 'react';
import { sortBlogs } from '@/utils';
import { Blog } from 'contentlayer/generated';
import BlogLayoutOne from './blog_layouts/blog_layout_one';
import BlogLayoutTwo from './blog_layouts/blog_layout_two';

interface Props {
  blogs: Blog[];
}


const BlogFeatured:  React.FC<Props> = ({blogs}) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    
      <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize tetx-3xl md:text-4xl'>Featured Post</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16'>
          <article className='col-span-2 sxl:col-span-1 row-span-2 relative'>
            <BlogLayoutOne blog={sortedBlogs[1]}/>
          </article>
          <article className='col-span-2 sm:col-span-1 row-span-1 relative'>
            <BlogLayoutTwo blog={sortedBlogs[2]}/>
          </article>
          <article className='col-span-2 sm:col-span-1 row-span-1 relative'>
            <BlogLayoutTwo blog={sortedBlogs[3]}/>
          </article>
          </div>
      </section>
    
  );
};

export default BlogFeatured;

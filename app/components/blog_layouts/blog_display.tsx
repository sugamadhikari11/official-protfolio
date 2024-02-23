"use client"
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface BlogDisplayProps {
  blog: any; // Adjust the type according to your data structure
}

const mdxComponents ={
    Image
}

const BlogDisplay: React.FC<BlogDisplayProps> = ({ blog}) => {
    const MDXContent = useMDXComponent(blog.body.code)
  return ( 
    <div className='col-span-12 lg:col-span-8 font-sans prose sm:prose-base md:prose-lg max-w-max dark:prose-invert prose-blockquote:bg-accentDark/70 prose-blockquote:p-2 
    prose-blockquote:px-2 prose-blockquote:border-accentDark prose-blockquote:rounded-r-lg'>
        <MDXContent  components={mdxComponents}/>
        </div>
  );
};

export default BlogDisplay;
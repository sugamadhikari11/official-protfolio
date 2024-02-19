import React from 'react';
import Image from "next/image";
import { sortBlogs } from '@/utils';
import { Blog } from 'contentlayer/generated';

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
  
  
    return (
      <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end  mx-10 relative h-[85vh]'>
          <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0'/>
          {/* Render the Image component with blog.image */}
          <Image 
            src={blog.image.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title} // Use blog title as alt text
            fill // Scale the image to fill the container
            className='w-full h-full object-center object-cover rounded-3xl -z-10' // Apply styling if needed
          />
        </article>
      </div>
    );
  };

export default BlogScreen;

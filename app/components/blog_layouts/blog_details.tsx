import { format, parseISO } from 'date-fns';
import React from 'react';
import Link from 'next/link';
import {slug} from 'github-slugger';
import ViewCounter from './blog_view_counter';

interface BlogDetailsProps {
  blog: any; // Adjust the type according to your data structure
  postSlug: any;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog, postSlug }) => {
    console.log(blog)
  return (
    <div className='px-2 md:px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-lg mx-5 sm:text-xl font-medium md:mx-10 rounded-lg'>
        <time>
            {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <span><ViewCounter slug={postSlug}/></span>
        <div>
          {blog.readingTime.text}
        </div>
        <div>
        <Link href={`/categories/${slug(blog.tags[0])}`}>
         #{blog.tags[0]}
        </Link>
        </div>
    </div>

  );
};

export default BlogDetails;

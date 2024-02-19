// BlogPage.tsx
import React from 'react';
import { allBlogs } from "contentlayer/generated";
import BlogScreen from '@/app/components/blog_screen';
import BlogFeatured from '@/app/components/blog_feature';
import { Blog } from 'contentlayer/generated'; // Import Blog type using shortcut

const BlogPage: React.FC = () => {
  console.log(allBlogs);
  return (
    <div>
      {/* Pass allBlogs as a prop to BlogScreen */}
      <BlogScreen blogs={allBlogs as Blog[]} />
      <BlogFeatured/>
    </div>
  );
};

export default BlogPage;

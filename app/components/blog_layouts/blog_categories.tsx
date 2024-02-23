import React from 'react';
import {slug} from 'github-slugger';
import Category from './blog_category';

// Define the type for props
interface BlogCategoriesProps {
  categories: string[]; // Assuming categories are strings
  currentSlug: any; // Assuming active category is a string
}

// Define the functional component and its props
const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories, currentSlug }) => {
  return (
    <div className='px-0 md:px-10 sxl:px-20 mt-10 border-t-2 border-b-2 border-solid py-4 flex items-start flex-wrap font-medium mx-2 md:mx-10'>
        {categories.map(cat => (
          <Category 
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}/>
        ))}
     
    </div>
  );
};

export default BlogCategories;

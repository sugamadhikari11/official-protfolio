import React from 'react';
import { useRouter } from 'next/router';
import { allBlogs } from '@/.contentlayer/generated';
import { slug } from 'github-slugger';
import BlogCategories from '@/app/components/blog_layouts/blog_categories';
import BlogLayoutThree from '@/app/components/blog_layouts/blog_layout_three';

// Define the type for props
interface CategoryPageProps {
  params: {
    slug: string;
  };
}
 
// Define the functional component and its props
const CategoryPage: React.FC<CategoryPageProps> = () => {
  const router = useRouter();
  const { slug:postSlug } = router.query;
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog)=>{
    return blog.tags?.some(tag=>{
        const slugified = slug(tag);
        if(!allCategories.includes(slugified)){
            allCategories.push(slugified)
        }
        if(postSlug === "all"){
            return true
        }
        return slugified === postSlug
    })
        
  })

  return <article className='mt-12 flex flex-col'>
    <div className='px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col'>
        <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'>
            #{postSlug}
        </h1>
        <span className='mt-2 inline-block'>Discover more categories and expand your knowledge!</span>
    </div>
    <BlogCategories categories={allCategories} currentSlug={postSlug}/>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32
    px-5 sm:px-10 md:px-24 sxl:px-32'>
      {blogs.map((blog,index)=>(
        <article key={index} className='col-span-1 row-span-1 relative'>
            <BlogLayoutThree blog={blog}/>
        </article>
      ))}
    </div>
  </article>
};

export default CategoryPage;


import { allBlogs } from '@/.contentlayer/generated';
import Tag from '@/app/components/elements/Tag';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {slug} from 'github-slugger';
import Image from "next/image";
import BlogDetails from '@/app/components/blog_layouts/blog_details';
import BlogDisplay from '@/app/components/blog_layouts/blog_display';


export default function BlogPost() {
  const router = useRouter();
  const { slug:postSlug } = router.query;
  const [blog, setBlog] = useState<any>(null); // Change the type according to your data structure

  useEffect(() => {
    // Find the blog post in the content layer data based on the received slug
    if (postSlug) {
      const foundBlogPost = allBlogs.find((blog) => blog._raw.flattenedPath === postSlug);
      setBlog(foundBlogPost);
    }
  }, [postSlug]);

  // Render loading if the blog post is being fetched
  if (!blog) {
    return <div>Loading...</div>;
  }

  return <article>
    <div className='mb-8 text-center relative w-full h-[70vh] bg-dark'>
      <div className='w-full z-10 flex flex-col items-center justify-center absolute 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Tag name={blog.tags[0]} link={`/categories/${slug(blog.tags[0])}`}></Tag>
      {/* Render the blog post title */}
      <h1 className='inline-block mt-6 font-semibold capitalize text-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal\ relative w-5/6'>{blog.title}</h1>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60'/>
      <Image 
          src={blog.image.filePath.replace("../public","")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title} // Use blog title as alt text
          width={blog.image.width}
          height={blog.image.width}
          className='aspect-square w-full h-full object-cover object-center' // Apply styling if needed
        />
    </div>
    <BlogDetails blog={blog} postSlug={postSlug}/>

    <div className='grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-6 md:px-10'>
      <div className='col-span-12 lg:col-span-4'>
        <details className='border-[1px] border-solid rounded-lg p-4 sticky top-14
        max-h-[80vh] overflow-hidden overflow-y-auto' open>
          <summary className='text-lg font-semibold capitalize cursor-pointer'>Table Of Content</summary>
          <ul className='mt-4 font-sans text-base'>
            {
            blog.toc.map((heading:any)=>{
              return <li key={heading.postSlug} className='py-1'>
                <a href={`#${heading.postSlug}`}
                  data-level ={heading.level}
                  className='data-[level=two]:pl-0 data-[level=two]:pt-2
                  data-[level=two]:border-t border-solid
                  data-[level=three]:pl-4
                  sm:data-[level=three]:pl-6 flex items-center justify-start'                
                >
                  {
                    heading.level === "three" ? <span className='flex w-1 h-1 rounded-full bg-accent mr-2'>&nbsp;</span>:null
                }
                  <span className='hover:underline'>{heading.text}</span>
                </a>
              </li>
            })
          }
          </ul>
        </details>
      </div>

      <BlogDisplay blog={blog}/>
    </div>
    </article>
  
}

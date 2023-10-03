import { useState } from 'react';
import { BlogIndexResult } from '../../mock/blog-index-mock';
import { NavLink } from 'react-router-dom';

export const BlogIndex = () => {
  const [blog, setBlog] = useState(BlogIndexResult);
  const disableAdmin = (event) => {
    const { id, checked } = event.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      blogList: prevBlog.blogList.map((b) =>
        b.id === parseInt(id) ? { ...b, isActive: checked } : b
      ),
    }));
  };
  console.log(blog);

  return (
    <div className="container mx-auto">
      
      <div className="w-full min-h-[calc(100vh-140px)] bg-red-400 flex justify-center items-center space-x-10">
        <div className="w-20 py-4 bg-adoppix text-center rounded-md text-white shadow-lg hover:-translate-y-2 ease-linear duration-300 cursor-pointer transition-transform">
          <NavLink to={'course'}>รายวิชา</NavLink>
        </div>
        <div className="w-20 py-4 bg-adoppix text-center rounded-md text-white shadow-lg hover:-translate-y-2 ease-linear duration-300 cursor-pointer transition-transform">
        <NavLink to={'general'}>ทั่วไป</NavLink>
        </div>
      </div>
    </div>
  );
};

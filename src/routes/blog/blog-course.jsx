import { useState } from 'react';
import { BlogIndexResult } from '../../mock/blog-index-mock';
import ModalCreateMainBlog from '../../components/modal/blog/create-main-blog';

export const BlogCourse = () => {
  const [blog, setBlog] = useState(BlogIndexResult);
  const [createModal, setCreateModal] = useState(true);
  const handleOnCloseModalCreate = () => setCreateModal(false);
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
    <div className="container mx-auto mt-10">
    <ModalCreateMainBlog visible={createModal} onClose={handleOnCloseModalCreate}/>
      <div className="flex justify-between">
        <div className="flex space-x-4 font-bold">
          <div className="flex space-x-2 p-2 bg-white rounded-md shadow-lg">
            <div>ทั้งหมด</div>
            <div>{blog.BlogAmount}</div>
          </div>
          <div className="flex space-x-2 p-2 bg-white rounded-md shadow-lg">
            <div>เปิด</div>
            <div>{blog.Active}</div>
          </div>
          <div className="flex space-x-2 p-2 bg-white rounded-md shadow-lg">
            <div>ปิด</div>
            <div>{blog.unActive}</div>
          </div>
        </div>
        <div>
          <div onClick={() => setCreateModal(true)} className=" bg-cu py-2 px-6 cursor-pointer  rounded-md text-white font-bold ">
            เพิ่ม
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-4 mt-10">
          {blog &&
            blog.blogList.map((b, index) => (
              <div className="bg-white p-2 rounded-md shadow-md z-[-2] " key={b.id}>
                <div>
                  <div className="flex justify-between">
                    <div className="font-bold text-xl">{b.name}</div>
                    <div className="flex items-center justify-end   ">
                      <label
                        htmlFor={b.id}
                        className="flex items-center cursor-pointer"
                      >
                        <div className="relative ">
                          <input
                            type="checkbox"
                            id={b.id}
                            className="sr-only"
                            defaultChecked={b.isActive}
                            onChange={disableAdmin}
                          />
                          <div
                            className={`block w-7 h-4 rounded-full duration-300 ${
                              b.isActive ? 'bg-green-400' : 'bg-gray-300'
                            }`}
                          ></div>
                          <div className="dot absolute left-[2px] top-[2px] bg-white w-3 h-3 rounded-full transition"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="opacity-70 text-sm">{b.description}</div>
                  {b.subject.link ? (
                    <div>
                      <div className="flex space-x-3">
                        <div className="opacity-70 text-xs">
                          {b.subject.subjectId}
                        </div>
                        <div className="opacity-70 text-xs">
                          {b.subject.subjectName}
                        </div>
                      </div>
                      <div className="opacity-70 text-xs flex space-x-1">
                        <div>อาจารย์ผู้สอน :</div>
                        <div>{b.subject.instructor}</div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  {b.subBlog.isSubBlog ? (
                    <div>
                      <div className="opacity-70 text-xs flex space-x-1">
                        <div>บล็อครอง :</div>
                        <div> {b.subBlog.subBlogAmount}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs">ไม่มีบล็อครอง</div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

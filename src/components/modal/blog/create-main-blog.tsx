import React, { useState, useRef } from 'react';

export default function ModalCreateMainBlog({
  visible,
  onClose,
  reloadFeeds,
  w,
  mxh,
}) {
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') onClose();
  };

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange1 = (event) => {
    const newValue = event.target.value;
    setInputValue1(newValue);
    setInputValue2(newValue.replace(/ /g, '-'));
  };

  if (!visible) return null;
  return (
    <div
      id="modal-card"
      onClick={handleOnClose}
      className="animation-custom fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  duration-300"
    >
      <div
        className={` dark:bg-adopsoftdark bg-adoplight w-[${
          w ? w : 500
        }px] p-4 rounded-lg animate-[wiggle_1s_ease-in-out_infinite] max-h-[${
          mxh ? mxh : 600
        }px] overflow-y-scroll`}
      >
        <div>
          <div>สร้าง</div>
          <div>
            <div>
              <div className='flex flex-col'>
                <label>รหัสวิชา</label>
                <input
                  type="text"
                  placeholder="2202202"
                  value={inputValue1}
                  onChange={handleInputChange1}
                />
              </div>
              <div className="flex text-xs">
                <div>https://blog.ta-cedt.com/blogs/</div>
                {inputValue2}
              </div>
            </div>
            <div>
              <div>ชื่อวิชา</div>
              <input type="text" />
            </div>
            <div className="w-full">
              <div>รายละเอียด</div>
              <textarea className="w-full" />
            </div>
            <div>
              <div>รูปภาพหน้าปก</div>
              <label htmlFor="file">asdasd</label>
              <input className="hidden" id="file" type="file" />
            </div>
          </div>
          <div className="flex space-x-2 justify-end border-t  pt-2 ">
            <div
              onClick={onClose}
              className="cursor-pointer border-2 rounded-md  py-2 px-6"
            >
              ยกเลิก
            </div>
            <div className="cursor-pointer bg-cu px-6 py-2 rounded-md text-white  font-bold">
              ยืนยัน
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

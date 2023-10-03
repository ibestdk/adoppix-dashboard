import React, { useState, useRef } from 'react';

export default function ModalAddUser({
  visible,
  onClose,
  reloadFeeds,
  title,
  body,
  w,
  mxh,
}) {
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="modal-card"
      onClick={handleOnClose}
      className="animation-custom z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  duration-300"
    >
      <div
        className={` dark:bg-adopsoftdark bg-white max-w-[${
          w ? w : 500
        }px] p-4 rounded-lg animate-[wiggle_1s_ease-in-out_infinite] max-h-[${
          mxh ? mxh : 600
        }px] overflow-y-scroll`}
      >
        <div className="border-b  pb-2 ">
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="">
          <div className="text-lg p-4">
            {body}

            <div className='outline-none focus:border-cu focus:ring-cu'>
              <div className="flex space-x-6 justify-center">
                <div>
                  <div>ชื่อ</div>
                  <input type="text" className="rounded-md" />
                </div>
                <div>
                  <div>นามสกุล</div>
                  <input type="text" className="rounded-md" />
                </div>
              </div>
              <div>
                <div>อีเมล</div>
                <input type="text" className="rounded-md w-full" />
              </div>
              <div className='flex justify-center space-x-6'>
              <div>
                  <div>รหัสผ่าน</div>
                  <input type="text" className="rounded-md" />
                </div>
                <div>
                  <div>ยืนยันรหัสผ่าน</div>
                  <input type="text" className="rounded-md" />
                </div>
              </div>
              <div className=''>
                <div>
                  ตำเหน่ง
                </div>
                <select className='rounded-md w-full'>
                  <option value="">กรุณาเลือก</option>
                  <option value="">TA</option>
                  <option value="">Teacher</option>
                </select>

              </div>
            </div>
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
  );
}

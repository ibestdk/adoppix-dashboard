import './modalCreate.scss';
import { AiFillCamera, AiOutlineCloseCircle } from 'react-icons/ai';

import React, { useState, useEffect, useRef } from 'react';

export default function ModalAdd({ visible, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') onClose();
  };


  
  function handleClearImageSelect() {
    setSelectedImage(null);
  }
  function handleImageSelect(imageFile) {
    setSelectedImage(imageFile);
  }

  const submitNewBanner = async () => {};

  if (!visible) return null;
  return (
    <div
      id="modal-card"
      onClick={handleOnClose}
      className="animation-custom fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-300 text-white"
    >
      <div className=" bg-adopsoftdark   w-[800px] p-4 rounded-lg animate-[wiggle_1s_ease-in-out_infinite]">
        <div className="py-2 ">
          <h2 className="text-white text-xl p-2 text-center">
            สร้างแบนเนอร์ใหม่
          </h2>
        </div>
        <div id="body" className="min-h-[250px] py-2 ">
          <div className="flex justify-between">
            <div className="p-4 rounded-full bg-adoppix flex justify-center items-center">
              <input
                type="file"
                id="image-input"
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleImageSelect(e.target.files[0]);
                  }
                }}
              />
              <label
                htmlFor="image-input"
                className="cursor-pointer text-[2rem]"
              >
                <AiFillCamera />
              </label>
            </div>
            <div className="flex flex-col">
              <label htmlFor="RedirectUrl ">Redirect Url</label>
              <input
                type="text"
                id="RedirectUrl"
                className="bg-adopdark rounded-lg focus:outline-none outline-0 border-0"
              />
            </div>
          </div>

          <div className="mt-4">
            {selectedImage ? (
              <div>
                <h2>พรีวิว:</h2>
                <div className="relative">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected" className='rounded-lg'
                  />
                  <AiOutlineCloseCircle onClick={handleClearImageSelect} className="absolute right-0 top-0 text-red-600 z-30 text-[2rem] bg-white mr-1 mt-1 rounded-full cursor-pointer" />
                </div>
              </div>
            ) : (
              <div className='w-full h-[177.6px] border-2 border-dashed rounded-lg'>

              </div>
            )}
          </div>
        </div>
        <div id="footer" className="flex mt-2 relative min-h-[40px]">
          <div className="absolute right-0">
            <button
              className="mx-2 bg-adoplighticon py-2 px-4 rounded-lg"
              onClick={onClose}
            >
              ยกเลิก
            </button>
            <button
              onClick={submitNewBanner}
              className="mx-2 bg-adoppix py-2 px-4 rounded-lg"
            >
              สร้าง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
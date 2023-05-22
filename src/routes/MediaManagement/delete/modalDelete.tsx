
import { deleteBanner } from '../../../services/banner.service';
import './modalDelete.scss';
import React, { useState, useEffect, useRef } from 'react';

export default function ModalDelete({ visible, onClose, banner, reset }) {
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') onClose();
  };

  const handleMessageChange = (e) => {

  };

  const submitDeleteBanner = async () => {
    await deleteBanner(banner.id)

    reset();
    onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="modal-card"
      onClick={handleOnClose}
      className="animation-custom fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-300"
    >
      <div className=" bg-adopsoftdark   w-[400px] p-4 rounded-lg animate-[wiggle_1s_ease-in-out_infinite]">
        <div className="py-2 ">
          <h2 className="text-white text-xl p-2 text-center">
            ต้องการลบ Banner id {banner.id}
          </h2>
        </div>
        <div
          id="body"
          className="min-h-[150px] py-2 "
        >
          <div className='flex justify-center'>
            <img
              className="rounded-lg h-[150px] text-center "
              src={`https://pix.adoppix.com/public/${banner.name}`}
              alt=""
            />
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
              onClick={submitDeleteBanner}
              className="mx-2 bg-adoppix py-2 px-4 rounded-lg"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

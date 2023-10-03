import React, { useState, useRef } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
export const SelectFileUPLoad = ({
  visible,
  onClose,
  reloadFeeds,
  title,
  body,
  w,
  mxh,
  mnh,
}) => {
  const [step, setStep] = useState(true);

  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') onClose();
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
        }px] overflow-hidden flex flex-col h-[600px]  relative`}
      >
        <div>
          <div>อัพโหลดไฟล์เดียว</div>
          <div>อัพโหลดหลายไฟล์</div>
        </div>
      </div>
    </div>
  );
};

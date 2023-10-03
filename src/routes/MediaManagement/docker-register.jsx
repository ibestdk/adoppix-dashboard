import { useState } from 'react';
import { AiFillCaretDown, AiFillFileAdd } from 'react-icons/ai';
import { BsArrow90DegDown, BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { IoMdAddCircle } from 'react-icons/io';
import RawJsonDisplay from '../../components/modal/rawjson';
export const DockerAnswers = () => {
  const [select, setSelect] = useState(true);

  // Toggle the select state on click
  const toggleSelect = () => {
    setSelect(!select);
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div></div>
        <div>
          <div className="bg-cudark text-white px-4 py-2 rounded-lg flex space-x- items-center cursor-pointer hover:brightness-75 duration-200">
            <AiFillFileAdd />
            <div>เพิ่ม</div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className="p-5 bg-cu rounded-sm flex justify-between">
          <div className="w-5/12">ชื่อชุดตรวจ</div>
          <div className="w-1/12 text-center">จำนวน</div>
          <div className="w-2/12 text-center">สถานะ</div>
          <div className="w-1/12"></div>
        </div>
        <div>
          <div className="p-3 bg-gray-300 rounded-sm flex justify-between">
            <div className="w-5/12 flex space-x-3">
              <div
                onClick={() => toggleSelect()}
                className=" text-white p-2 rounded-md cursor-pointer"
              >
                <AiFillCaretDown
                  className={`${select ? 'rotate-180' : ''} duration-300`}
                />
              </div>
              <div>A1</div>
            </div>
            <div className="w-1/12 text-center">2</div>
            <div className="w-2/12 text-center">
              <input type="checkbox" checked={true} name="" id="" />
            </div>
            <div className="flex justify-end items-center space-x-3 w-1/12">
              <div className="py-2 px-2 rounded-md bg-yellow-300 text-white">
                <BsPencilFill />
              </div>
              <div className="py-2 px-2 rounded-md bg-cudark text-white">
                <IoMdAddCircle />
              </div>
              <div className="py-2 px-2 rounded-md bg-red-500 text-white">
                <BsTrashFill />
              </div>
            </div>
          </div>

          <div
            className={`${
              select ? 'h-[300px]' : 'h-[0px]'
            } duration-500 overflow-hidden`}
          >
            <div className="flex justify-between bg-gray-200 p-3">
              <div className="ml-12 ">
                <BsArrow90DegDown className="-rotate-90" />
              </div>
              <div className="flex space-x-2">
                <div>ประเภท : </div>
                <div>API</div>
              </div>
              <div className="flex space-x-2">
                <div>พอร์ท : </div>
                <div>3000</div>
              </div>
              <div className="flex space-x-2">
                <div>พาร์ท : </div>
                <div>api/getBanner</div>
              </div>
              <div className="flex space-x-2">
                <div>การตอบสนอง : </div>
                <div className='bg-gray-300 p-2 rounded-md'>  <RawJsonDisplay /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

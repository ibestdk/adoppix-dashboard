import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { rejectSync, removeSync } from '../../services/report.service';

export const ReportItem = ({ report, onRemove }) => {
  const [isOnLoad, setIsOnLoad] = useState(false);

  const remove = async (id) => {
    setIsOnLoad(true);
    await removeSync(id);
    setIsOnLoad(false);
    onRemove(id);
  }

  const reject = async (id) => {
    setIsOnLoad(true);
    await rejectSync(id);
    setIsOnLoad(false);
    onRemove(id);
  }


  return (
    <div className="grid grid-cols-5 p-2 mt-1 py-6 border-b-2">
      <div className="flex items-center">
        <p className="text-gray-600">{report.id}</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">{report.type}</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">{report.description}</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">{report.createdAt}</p>
      </div>
      <div className="flex items-center">
        {isOnLoad === false ? (
          <div className='flex items-center'>
            <BsFillTrashFill
              onClick={() => {
                remove(report.id);
              }}
              className="text-white bg-red-600 hover:brightness-75 transition p-2 rounded-full text-4xl cursor-pointer"
            ></BsFillTrashFill>
            <AiOutlineCloseCircle
              onClick={() => {
                reject(report.id);
              }}
              className="text-white bg-red-600 hover:brightness-75 transition p-1 rounded-full text-4xl cursor-pointer ml-2"
            ></AiOutlineCloseCircle>
          </div>
        ) : (
          <div>
            <p>กำลังโหลด...</p>
          </div>
        )}
      </div>
    </div>
  );
};

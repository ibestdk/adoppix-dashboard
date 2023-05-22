import { useEffect, useState } from 'react';
import { getReports } from '../../services/report.service';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'

export const Report = () => {
  const [reports, setReports] = useState([]);

  const fetchReport = async () => {
    const reports = await getReports();
    console.log(reports);
    setReports(reports);
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const remove = async () => {
    console.log('on remove')
  }

  const reject = async () => {
    console.log('on reject')
  }

  return (
    <div className="mx-4 mt-10 w-full">
      <h1 className="font-semibold text-2xl">จัดการรายงาน</h1>
      {/* Header */}
      <div className="grid grid-cols-5 bg-adopdark p-2 py-6 mb-5">
        <div className="">
          <p className="flex-1 text-white font-bold">id</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ประเภท</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">คำอธิบาย</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">วันที่รายงาน</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ตัวเลือกการจัดการ</p>
        </div>
      </div>

      <div>
        {reports ? (
          reports.length > 0 &&
          reports.map((report, index) => {
            return (
              <div className="grid grid-cols-5 bg-adopsoftdark p-2 mt-1 py-6" key={index}>
                <div className="flex items-center">
                  <p className="text-white">{report.id}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-white">{report.type}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-white">{report.description}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-white">{report.createdAt}</p>
                </div>
                <div className="flex items-center">
                  <BsFillTrashFill onClick={remove} className='text-white bg-red-600 hover:brightness-75 transition p-2 rounded-full text-4xl cursor-pointer'></BsFillTrashFill>
                  <AiOutlineCloseCircle onClick={remove} className='text-white bg-red-600 hover:brightness-75 transition p-1 rounded-full text-4xl cursor-pointer ml-2'></AiOutlineCloseCircle>
                </div>
              </div>
            );
          })
        ) : (
          <div>ไม่พบข้อมูล</div>
        )}
      </div>
    </div>
  );
};

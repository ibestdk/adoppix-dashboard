import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
  AiOutlineFileExcel,
  AiOutlineReload,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { RiFileExcel2Fill } from 'react-icons/ri';
import ModalConfrim from '../../components/modal/confirmModal';
import { NavLink } from 'react-router-dom';
import { UploadStep } from '../../components/modal/uploadStep';

export const ExcelIndex = () => {
  const [csvData, setCSVData] = useState({});
  const [modalRemove, setModalRemove] = useState(false);
  const handleOnCloseEdit = () => setModalRemove(false);
  const [modalUpload, setModalUpload] = useState(false);
  const handleOnCloseModalUpload = () => setModalUpload(false);
  const [data, setData] = useState([
    {
      SubjectCode: '2110104',
      SubjectName: 'Computer Programming',
      NumberofExamSubmissions: 267,
      NumberofExamQuestionsChecked: 267,
      Status: 1,
    },
    {
      SubjectCode: '2110202',
      SubjectName: 'Database Management',
      NumberofExamSubmissions: 185,
      NumberofExamQuestionsChecked: 185,
      Status: 0,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 2,
    },
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const results = [];
      const data = reader.result;

      Papa.parse(data, {
        complete: (parsedData) => {
          setCSVData({
            fileName: file.name,
            data: parsedData.data,
            file: file,
          });
        },
      });
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    console.log('File Name:', csvData.fileName);
    console.log('CSV Data:', csvData.data);
  }, [csvData]);

  return (
    <div className="p-5 w-full h-full text-black">
      <ModalConfrim
        visible={modalRemove}
        onClose={handleOnCloseEdit}
        title={'ยืนยันการลบ'}
        body={'คุณแน่ใจว่าต้องการลบ CSV ที่เลือก?'}
        w={400}
        mxh={600}
      />
      <UploadStep
      visible={modalUpload}
      onClose={handleOnCloseModalUpload}
      title={'อัพโหลดไฟล์ CSV'}
      body={'ตัวอย่างไฟล์ใช้ในการอัพโหลด'}
      w={800}
      mxh={1200}
      mnh={800}
    />
      <div>
        <div className="text-4xl font-bold m-2">Excel.</div>
        <div className="flex mt-4 justify-between">
          <div className=" flex  space-x-3 text-2xl">
            <div className='flex items-center space-x-1'>
              <AiOutlineCheckCircle className="text-green-500" />
              <div className='text-lg'>ตรวจเเล้ว</div>
            </div>
            <div className='flex items-center space-x-1'>
              <AiOutlineCloseCircle className="text-red-500" />
              <div className='text-lg'>พบข้อผิดพลาด</div>
            </div>
            <div className='flex items-center space-x-1'>
              <AiOutlineMinusCircle className="text-gray-500" />
              <div className='text-lg'>อยู่ระหว่างรอการตรวจ</div>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-6">
              <div className="text-xl font-bold ">Student Answer : </div>
              <div className="flex text-white">
                <div onClick={() => setModalUpload(true)}
                  className="flex space-x-2 bg-pink-500  p-2 cursor-pointer"
                >
                  <RiFileExcel2Fill className="text-2xl " />
                  <div className="font-bold">import</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="py-2 text-white px-6 cursor-pointer bg-pink-500 rounded-md">
                  ค้นหา
                </div>
                <div className="p-3 bg-pink-500 rounded-md text-xl text-white">
                  <AiOutlineReload className="cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <div className="flex justify-between p-3 bg-pink-600 text-white rounded-md">
              <div className="w-2/12">รหัสวิชา</div>
              <div className="w-2/12">ชื่อวิชา</div>
              <div className="w-2/12">อ.ผู้สอน</div>
              <div className="w-2/12 text-center">จำนวนผู้ส่งข้อสอบ</div>
              <div className="w-2/12 text-center">จำนวนข้อสอบที่ถูกตรวจ</div>
              <div className="w-1/12 text-center">สถานะ</div>
              <div className="w-2/12"></div>
            </div>
            <div className="max-h-[70vh] overflow-y-scroll shadow-lg rounded-md">
              {data.length > 0 &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center  p-3  duration-300 rounded-md ${
                      index % 2 === 0
                        ? 'text-black bg-white hover:bg-gray-200'
                        : 'bg-pink-300 text-white hover:bg-pink-400'
                    }`}
                  >
                    {console.log(item.SubjectCode)}
                    <div className="w-2/12">{item.SubjectCode}</div>
                    <div className="w-2/12">{item.SubjectName}</div>
                    <div className="w-2/12">อ.ผู้สอน</div>
                    <div className="w-2/12 text-center">
                      {item.NumberofExamSubmissions}
                    </div>
                    <div className="w-2/12 text-center">
                      {item.NumberofExamQuestionsChecked}
                    </div>
                    <div className="w-1/12 justify-center text-2xl flex text-center">
                      {item.Status === 1 ? (
                        <AiOutlineCheckCircle className="text-green-500" />
                      ) : item.Status === 0 ? (
                        <AiOutlineCloseCircle className="text-red-500" />
                      ) : (
                        <AiOutlineMinusCircle className="text-gray-500" />
                      )}
                    </div>
                    <div className="w-2/12 flex space-x-2 justify-end ">
                      <NavLink
                        to="item"
                        className="px-2 text-lg shadow-md cursor-pointer py-1 bg-yellow-300 rounded-md flex items-center text-white"
                      >
                        <AiOutlineEye />
                        <div className="text-sm">ดูผลตรวจ</div>
                      </NavLink>
                      <div className="px-4 cursor-pointer shadow-md text-white py-1 bg-green-400 rounded-md">
                        ตรวจใหม่
                      </div>
                      <div
                        onClick={() => setModalRemove(true)}
                        className="px-2 cursor-pointer shadow-md py-1 bg-red-400 rounded-md flex items-center text-white"
                      >
                        <BsTrash />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const iconStatus = ({ input }) => {
  return (
    <div className="w-1/12 justify-center text-2xl flex text-center">
      {input === 1 ? (
        <AiOutlineCheckCircle className="text-green-500" />
      ) : input === 0 ? (
        <AiOutlineCloseCircle className="text-red-500" />
      ) : (
        <AiOutlineMinusCircle className="text-gray-500" />
      )}
    </div>
  );
};

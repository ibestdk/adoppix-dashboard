import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
  AiOutlineLoading,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsTrash ,BsArrowUpCircle } from 'react-icons/bs';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const DockerManager = () => {
  const [csvData, setCSVData] = useState([]);
  const [log, setLog] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([
    {
      SubjectCode: '2110104',
      SubjectName: 'Computer Programming',
      NumberofExamSubmissions: 267,
      NumberofExamQuestionsChecked: 267,
      Status: 0,
    },
    {
      SubjectCode: '2110202',
      SubjectName: 'Database Management',
      NumberofExamSubmissions: 185,
      NumberofExamQuestionsChecked: 185,
      Status: 3,
    },
    {
      SubjectCode: '2110301',
      SubjectName: 'Web Development',
      NumberofExamSubmissions: 302,
      NumberofExamQuestionsChecked: 302,
      Status: 1,
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
          setCSVData(parsedData.data); // Update the state with the parsed CSV data
        },
      });
    };

    reader.readAsText(file);
  };

  const addLogs = (newLog) => {
    setLog([...log, newLog]);
  };

  useEffect(() => {
    console.log(csvData);
  }, [csvData]);

  useEffect(() => {
    setTimeout(() => {
      addLogs('loading.');
    }, 1000);
    setTimeout(() => {
      addLogs('loading. .');
    }, 1000);
    setTimeout(() => {
      addLogs('loading. . .');
    }, 1000);
    setTimeout(() => {
      addLogs('ready!');
    }, 2000);
  }, []);

  return (
    <div className="p-5 w-full h-screen bg-white text-black">
      <div className="flex h-full flex-col justify-between">
        <div className="">
          <div className="text-4xl font-bold m-2">Upload CSV Docker.</div>
          <div className="flex mt-4 justify-end">
            <div className="flex space-x-2 items-center">
              <div className="flex items-center space-x-6">
                <div className="text-xl font-bold ">Student Answer : </div>
                <div className="flex text-white">
                  <label
                    htmlFor="input"
                    className="flex space-x-2 bg-pink-500  p-2 cursor-pointer"
                  >
                    <RiFileExcel2Fill className="text-2xl " />
                    <div className="font-bold">import</div>
                  </label>
                  <input
                    id="input"
                    className="hidden"
                    type="file"
                    accept=".csv"
                    onChange={handleFileInputChange}
                  />
                </div>
                <div className="text-xl font-bold"> To </div>
                <div>
                  <div>
                    <div>
                      <select
                        value={selectedOption}
                        onChange={handleChange}
                        className="bg-pink-500 text-white  border-non outline-none"
                      >
                        <option value="">Select Teacher Answer</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-[85%]">
            <div className="font-bold text-2xl">List</div>
            <div className="mt-4">
              <div>
                <div className="flex justify-between p-3 bg-pink-600 text-white rounded-md">
                  <div className="w-2/12">รหัสวิชา</div>
                  <div className="w-2/12">ชื่อวิชา</div>
                  <div className="w-2/12">อ.ผู้สอน</div>
                  <div className="w-2/12 text-center">จำนวนผู้ส่งข้อสอบ</div>
                  <div className="w-2/12 text-center">
                    จำนวนข้อสอบที่ถูกตรวจ
                  </div>
                  <div className="w-1/12 text-center">สถานะ</div>
                  <div className="w-3/12"></div>
                </div>
                <div className="max-h-[50vh] overflow-y-scroll shadow-lg rounded-md">
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
                        <div className="w-3/12 flex space-x-2 justify-end ">
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
          <div className="w-[15%]">
            <div className="font-bold text-2xl">Queue</div>
            <div className="mt-4">
              <div>
                <div className="flex justify-between p-3 bg-pink-600 text-white rounded-md">
                  <div className="w-6/12">รหัสวิชา</div>
                  <div className="w-6/12 text-center">สถานะ</div>
                </div>
                <div className="max-h-[50vh] overflow-y-scroll shadow-lg rounded-md">
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
                        <div className="w-6/12">{item.SubjectCode}</div>
                        <div className="w-6/12 justify-center text-2xl flex text-center">
                          {item.Status === 1 ? (
                            <AiOutlineLoading className="text-yellow-300 animate-spin" />
                          ) : item.Status === 0 ? (
                            <AiOutlineCloseCircle className="text-red-500" />
                          ) : item.Status === 2 ? (
                            <BsArrowUpCircle className="text-gray-500" />
                          ) : <AiOutlineCheckCircle className="text-green-500"/>}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-adopsoftdark w-full h-40 rounded-md text-white overflow-y-scroll">
            <div className="p-4">
              {log.length > 0 &&
                log.map((l, index) => {
                  return (
                    <div key={index} className="flex space-x-2">
                      <div
                        className={`${l === 'ready!' ? 'text-green-400' : ''}`}
                      >
                        {l}
                      </div>
                      
                    </div>
                  );
                })}

                <input type="text" className='bg-transparent w-full text-white cursor-text p-0 focus:outline-none focus:border-none ring-transparent focus:shadow-none border-none' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

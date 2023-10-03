import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { CSVLink } from 'react-csv';

import {
  AiOutlineFileExcel,
  AiOutlineReload,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
  AiOutlineDownload,
} from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { RiFileExcel2Fill } from 'react-icons/ri';
import ModalConfrim from '../../components/modal/confirmModal';
import { FinalResult } from '../../mock/final-result';
import { Link, useLocation } from 'react-router-dom';

export const ExcelItem = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const [csvData, setCSVData] = useState({});
  const [modalRemove, setModalRemove] = useState(false);
  const handleOnCloseEdit = () => setModalRemove(false);
  const [data, setData] = useState(FinalResult);
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

  const csvDataDL = [
    [
      'Subject Code',
      'Subject Name',
      'Number of Exam Submissions',
      'Number of Exam Questions Checked',
      'Status',
      'Date',
      'Amount of Question',
    ],
    [
      FinalResult.SubjectCode,
      FinalResult.SubjectName,
      FinalResult.NumberofExamSubmissions,
      FinalResult.NumberofExamQuestionsChecked,
      FinalResult.Status,
      FinalResult.date,
      FinalResult.amountQuestion,
    ],
    [
      '',

    ],
    [
      'Student ID',
      'All Scores',
      'Q1 Score',
      'Q2 Score',
      'Q3 Score',
      'Q4 Score',
      'Q5 Score',
      'Q6 Score',
      'Q7 Score',
      'Q8 Score',
    ],
  ];

  FinalResult.studentResult.forEach((result) => {
    const row = [
      result.studentId,
      result.allScores,
    ];
    result.questionResult.forEach((qResult) => {
      row.push(qResult.score);
    });
    csvDataDL.push(row);
  });

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
      <div className="flex font-bold">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <div className="breadcrumb-item" key={name}>
              {isLast ? (
                <span className="text-cu">{name}</span>
              ) : (
                <Link className="text-gray-400" to={routeTo}>
                  {name}
                </Link>
              )}
              {!isLast && <span className="mx-1 text-gray-400">&gt;</span>}
            </div>
          );
        })}
      </div>
      <div>
        <div className="text-4xl font-bold m-2">Excel.</div>
        <div className="mt-4 ">
          <div className="flex items-center justify-around">
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">รหัสวิชา : </div>
              <div className="text-lg">{data.SubjectCode}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">ชื่อวิชา : </div>
              <div className="text-lg">{data.SubjectName}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">จำนวนคนที่ส่ง : </div>
              <div className="text-lg">{data.NumberofExamSubmissions}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">ตรวจเเล้ว : </div>
              <div className="text-lg">{data.NumberofExamQuestionsChecked}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">สถานะ : </div>
              <div className="text-lg">
                {data.Status === 1 ? 'ตรวจแล้ว' : 'พบปัญหา'}
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">เวลา : </div>
              <div className="text-lg">{data.date}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-lg font-bold ">จำนวนข้อสอบ : </div>
              <div className="text-lg">{data.amountQuestion}</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-2xl font-bold bg-cu text-white p-2 rounded-lg hover:bg-pink-600 duration-300">
              <CSVLink data={csvDataDL} filename="final_result.csv">
                <AiOutlineDownload />{' '}
               
                </CSVLink>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <div className="flex justify-between p-3 bg-pink-600 text-white rounded-md">
              <div className="w-2/12">รหัสนักศึกษา</div>
              {data.amountQuestion &&
                Array.from({ length: data.amountQuestion }).map((_, index) => (
                  <div
                    className="w-1/12 flex justify-center items-center"
                    key={index}
                  >
                    Q-{index + 1}
                  </div>
                ))}

              <div className="w-1/12 text-center">รวม</div>
            </div>
            <div className="max-h-[70vh] overflow-y-scroll shadow-lg rounded-md">
              {data.studentResult.length > 0 &&
                data.studentResult.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center  p-3  duration-300 rounded-md ${
                      index % 2 === 0
                        ? 'text-black bg-white hover:bg-gray-200'
                        : 'bg-pink-300 text-white hover:bg-pink-400'
                    }`}
                  >
                    {console.log(item.studentId)}
                    <div className="w-2/12">{item.studentId}</div>
                    {item.questionResult.length > 0 &&
                      item.questionResult.map((score, index) => {
                        return (
                          <div
                            key={index}
                            className="w-1/12 flex justify-center items-center"
                          >
                            <IconStatus input={score.score} />
                          </div>
                        );
                      })}

                    <div className="w-1/12 text-2xl text-center">
                      {item.allScores}
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

export const IconStatus = ({ input }) => {
  console.log(input);
  return (
    <div className="w-full justify-center text-4xl flex text-center">
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

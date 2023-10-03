import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { AiOutlineFileExcel } from 'react-icons/ai';
import { RiFileExcel2Fill } from 'react-icons/ri';
import axios from 'axios';
import { UploadAnswerStep } from '../../components/modal/uploadAnswerStep';

export const ExcelUploadTeacher = () => {
  const [csvData, setCSVData] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [modalUpload, setModalUpload] = useState(false);
  const handleOnCloseModalUpload = () => setModalUpload(false);
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

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('file', csvData.file);

      const response = await axios.post(
        'https://api.services.ta-cedt.com/api/SQLSubject/answer',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle the response
      console.log(response.data);
      // Do something with the response data
    } catch (error) {
      // Handle the error
      console.error(error);
      // Display an error message to the user
    }
  };

  useEffect(() => {
    console.log('File Name:', csvData.fileName);
    console.log('CSV Data:', csvData.data);
  }, [csvData]);

  return (
    <div className="p-5 w-full h-full text-black">
      <div>
        <UploadAnswerStep
          visible={modalUpload}
          onClose={handleOnCloseModalUpload}
          title={'อัพโหลดไฟล์ CSV'}
          body={'ตัวอย่างไฟล์ใช้ในการอัพโหลด'}
          w={800}
          mxh={1200}
          mnh={800}
        />
        <div className="text-4xl font-bold m-2">
          Upload CSV Teacher Answer Exam.
        </div>
        <div className="flex mt-4 justify-between">
          <div className="flex space-x-2 items-center">
            <div>
              <div>ชื่อชุดคำตอบ</div>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-6">
              <div className="text-xl font-bold">อัพโหลดชุดคำตอบ : </div>
              <div className="flex text-white">
                <div className='bg-cu text-white flex p-2' onClick={() => setModalUpload(true)}>
                  <RiFileExcel2Fill className="text-2xl " />
                  <div className="font-bold">import</div>
                </div>

             
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-4 w-[85vw] overflow-x-scroll">
          <div className="h-[66px] overflow-hidden">
            {csvData.data && csvData.data.length > 1 && (
              <table className="border-collapse border border-gray-300 w-full">
                <thead>
                  <tr>
                    {Object.values(csvData.data[0]).map((header, index) => (
                      <th
                        key={index}
                        className="border border-gray-300 h-[65px] p-2"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.data.slice(1).map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, index) => (
                        <td key={index} className="border border-gray-300 p-2">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="h-[600px] overflow-y-auto overflow-x-hidden">
            {csvData.data && csvData.data.length > 1 && (
              <table className=" border-collapse border border-gray-300 w-full">
                <tbody>
                  {csvData.data.slice(1).map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, index) => (
                        <td
                          key={index}
                          className="border min-h-[65px] border-gray-300 p-2"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <div
            className="bg-pink-500 text-white py-2 px-4 rounded-md cursor-pointer font-bold"
            onClick={handleUpload}
          >
            อัพโหลด
          </div>
        </div>
      </div>
    </div>
  );
};

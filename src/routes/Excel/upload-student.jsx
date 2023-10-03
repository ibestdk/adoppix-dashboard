import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { UploadStep } from '../../components/modal/uploadStep';

export const ExcelUploadStudent = () => {
  const [csvData, setCSVData] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
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

  useEffect(() => {
    console.log('File Name:', csvData.fileName);
    console.log('CSV Data:', csvData.data);
  }, [csvData]);

  return (
    <div className="p-5 w-full h-full text-black">
      <div>
        <UploadStep
          visible={modalUpload}
          onClose={handleOnCloseModalUpload}
          title={'อัพโหลดไฟล์ CSV'}
          body={'ตัวอย่างไฟล์ใช้ในการอัพโหลด'}
          w={800}
          mxh={1200}
          mnh={800}
        />
        <div className="text-4xl font-bold m-2">Upload CSV Student Exam.</div>
        <div className="flex mt-4 justify-end">
          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-6">
              <div className="text-xl font-bold ">Student Answer : </div>
              <div
                onClick={() => setModalUpload(true)}
                className="flex space-x-2 text-white bg-pink-500  p-2 cursor-pointer"
              >
                <RiFileExcel2Fill className="text-2xl " />
                <div className="font-bold">import</div>
              </div>
              {/*<div className="flex text-white">
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
  </div>*/}
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
        <div className="border border-gray-300 mt-4 w-[85vw] overflow-x-scroll">
          <div className="h-[66px] overflow-hidden">
            {csvData.data && csvData.data.length > 1 && (
              <table className="border-collapse border border-gray-300">
                <thead>
                  <tr>
                    {Object.values(csvData.data[0]).map((header, index) => (
                      <th key={index} className="border border-gray-300 p-2">
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
          <div className="h-[650px] overflow-y-auto overflow-x-hidden">
            {csvData.data && csvData.data.length > 1 && (
              <table className=" border-collapse border border-gray-300">
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
        </div>
        <div className="flex justify-end mt-2">
          <div className="bg-pink-500 text-white py-2 px-4 rounded-md cursor-pointer font-bold">
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

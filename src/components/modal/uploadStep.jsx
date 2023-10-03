import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiFileExcel2Fill } from 'react-icons/ri';
import './animation.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getTeacherAnswer, uploadStudentAnswer } from '../../services/api/excel.service';
export const UploadStep = ({
  visible,
  onClose,
  reloadFeeds,
  title,
  body,
  w,
  mxh,
  mnh,
}) => {
  const [step, setStep] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [optionList, setOptionList] = useState([]);

const getOptionList = async () => {
  let result = await getTeacherAnswer();
  console.log(result);
  setOptionList(result);
}

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFileSelection = (event) => {
    const files = event.target.files;
    //@ts-ignore
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleUpload = async () => {
    // Perform the upload logic here using the selectedFiles array
    // You can use libraries like Papa Parse (for CSV) or XLSX.js (for XLSX) for further processing if needed

    // Example code to log the file names

    let result = await uploadStudentAnswer(selectedOption , selectedFiles[0])
    console.log(result)

    selectedFiles.forEach((file) => {
      //@ts-ignore
      console.log(file.name);
    });
  };
  const getFileType = (fileName) => {
    const fileExtension = fileName.split('.').pop().toLowerCase();
    return fileExtension === 'csv'
      ? 'CSV'
      : fileExtension === 'xlsx'
      ? 'XLSX'
      : '';
  };
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-card') {
      setStep(false);
      onClose();
    }
  };
  const closeButton = () => {
    setStep(false);
    onClose();
  };

useEffect(() => {
  getOptionList();
}, []);

  if (!visible) return null;
  return (
    <div
      id="modal-card"
      onClick={handleOnClose}
      className={` animation-custom  fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  duration-300`}
    >
      <div
        className={` dark:bg-adopsoftdark bg-adoplight w-[1000px] w-[${
          w ? 1080 : 1000
        }px] p-4 rounded-lg delay-1000 duration-500 overlay transition-all ${
          visible ? 'translate-y-0' : 'translate-y-100'
        } animate-[wiggle_1s_ease-in-out_infinite] max-h-[${
          mxh ? mxh : 600
        }px] overflow-hidden flex flex-col h-[600px]  `}
      >
        <div className="border-b h-[10%]  pb-2 ">
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="relative overflow-hidden  h-[80%]">
          <div
            className={`absolute h-full ${
              step === false ? 'translate-x-0' : 'translate-x-[-800px]'
            } bg-adoplight duration-500 left-0 w-full `}
          >
            <div>
              <div className="flex justify-center items-center">
                <AiOutlineQuestionCircle className="text-2xl" />
                <div>ตัวอย่างไฟล์</div>
              </div>
              <div className="p-5 ">
                <img
                  className="rounded-md shadow-md h-full"
                  src="https://cdn.discordapp.com/attachments/681151360305201169/1120257592447479899/image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className={`absolute h-full ${
              step === true ? 'translate-x-0' : 'translate-x-full'
            } bg-adoplight duration-500 right-0 w-full`}
          >
            <div className="pt-2">
              <div className="flex justify-between items-center">
                <div>
                  <div>
                    <label
                      htmlFor="upload"
                      className="flex items-center text-white bg-pink-500 p-2"
                    >
                      <RiFileExcel2Fill className="text-2xl" />
                      <div>อัพโหลด</div>
                    </label>
                    <input
                      id="upload"
                      type="file"
                      multiple
                      className="hidden "
                      accept=".csv, .xlsx"
                      onChange={handleFileSelection}
                    />
                  </div>
                  <button onClick={handleUpload}>Upload</button>
                </div>
                <div>
                  <div>ไฟล์ทั้งหมด {selectedFiles.length}</div>
                </div>
              </div>
              <div className="flex justify-between mx-4 mt-4 px-2 font-bold">
                <div className='w-3/6'>ชื่อไฟล์</div>
                <div className='w-1/6'>นามสกุลไฟล์</div>
                <div className='w-1/6 flex justify-center'>คำตอบ</div>
                <div className='w-1/6'></div>
              </div>
              <div className="max-h-[400px] overflow-y-scroll rounded-md">
                <ul className="list-none m-4 bg-adoplighticon bg-opacity-20 rounded-md">
                  <TransitionGroup>
                    {selectedFiles.map((file, index) => {
                      const isLastItem = index === selectedFiles.length - 1;
                      const classNames = isLastItem ? 'fade' : 'slide-fade';
                      return (
                        <CSSTransition
                          key={index}
                          timeout={300}
                          classNames={classNames}
                        >
                          <li className="flex items-center justify-between space-x-2 space-y-2 hover:bg-adoplighticon rounded-md p-2 duration-300">
                            <div className='w-3/6 flex '>
                              <RiFileExcel2Fill className="text-green-500 text-2xl w-10" />
                              <div className="text-start flex just truncate  w-[350px]">
                                {file.name}
                              </div>
                            </div>
                            <div className='w-1/6 flex justify-center'>
                              {getFileType(file.name) && (
                                <span>{getFileType(file.name)}</span>
                              )}
                            </div>
                            <div className='w-1/6'>
                              <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="bg-pink-500 text-white  border-non outline-none"
                              >
                                <option value="">เลือกคำตอบ</option>
                                {
                                  optionList.length > 0 && optionList.map((option, index) => (
                                    <option value={option.id} key={index}>
                                      {option.name}
                                    </option>
                                  ))
                                }
                                
                              </select>
                            </div>
                            <div className='w-1/6'>
                              <button
                                className="bg-red-500 p-2 text-white rounded-md"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </li>
                        </CSSTransition>
                      );
                    })}
                  </TransitionGroup>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 h-[10%] justify-end border-t  pt-2 ">
          <div className="flex space-x-2 justify-end border-t  pt-2 ">
            {step === true ? (
              <div
                onClick={() => setStep(false)}
                className="cursor-pointer border-2 rounded-md  py-2 px-6"
              >
                ย้อนกลับ
              </div>
            ) : (
              <div
                onClick={closeButton}
                className="cursor-pointer border-2 rounded-md  py-2 px-6"
              >
                ยกเลิก
              </div>
            )}
            {step === true ? (
              <div className="cursor-pointer bg-cu px-6 py-2 rounded-md text-white  font-bold">
                ยืนยัน
              </div>
            ) : (
              <div
                onClick={() => setStep(true)}
                className="cursor-pointer bg-cu px-6 py-2 rounded-md text-white  font-bold"
              >
                ถัดไป
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

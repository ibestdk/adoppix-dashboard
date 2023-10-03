import { useEffect, useState, Fragment, useRef } from 'react';
import { toggleIsShow } from '../../services/qa.service';
import { Reply } from './reply';

export const QAItem = ({ qa }) => {
  const profileImage = `https://pix.adoppix.com/public/${qa.profileImage}`;

  const [isShow, setIsShow] = useState(qa.isShow);
  const [toggleIsShowClass, setToggleIsShowClass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  useEffect(() => {

  }, []);

  useEffect(() => {
    let isShowClass = '';
    if (isShow) {
      isShowClass = 'bg-green-400';
    } else {
      isShowClass = 'bg-red-400';
    }
    isShowClass +=
      ' text-white p-3 rounded-full cursor-pointer hover:brightness-75 transition';
    setToggleIsShowClass(isShowClass);
  }, [isShow]);

  const onToggleIsShow = async () => {
    setIsLoading(true);
    const result = await toggleIsShow(qa.id);
    setIsShow(result.data);
    setIsLoading(false);
  };

  const onOpenReply = () => {
    setOpenReply(true);
  }

  const onCloseReply = () => {
    setOpenReply(false);
  }

  return (
    <div className=" p-5 rounded-lg w-1/5 mr-2 mt-2 bg-adopsoftdark  shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img className="w-2/12 rounded-full" src={profileImage} />
          <p className="font-semibold ml-2">{qa.username}</p>
        </div>
        {isLoading ? (
          <svg
          className="animate-spin w-1/5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <div>
            <button
              className={toggleIsShowClass}
              onClick={onToggleIsShow}
            ></button>
          </div>
        )}
      </div>
      <div className="h-20 overflow-y-auto">
        <h1 className="font-bold">{qa.title}</h1>
        <p className="mb-3">{qa.description}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-blue-500 cursor-pointer" onClick={onOpenReply}>ตอบกลับ</p>
        <Reply qaId={qa.id} isOpenReply={openReply} onCloseReply={onCloseReply}/>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { getWithdrawRequests, approveWithdraw, rejectWithdraw } from '../../services/withdraw.service';
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from 'react-icons/bs';

export const Withdraw = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequest = async () => {
    const newRequests = await getWithdrawRequests();
    setRequests(newRequests);
    console.log(newRequests)
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const approve = async (id) => {
    const result = await approveWithdraw(id);
    const newRequests = requests.filter(x => x.id !== id);
    setRequests(newRequests);
  }

  const reject = async (id) => {
    const result = await rejectWithdraw(id);
    const newRequests = requests.filter(x => x.id !== id);
    setRequests(newRequests);
  }

  return (
    <div className="mx-4 mt-10 w-full">
      <h1 className="font-semibold text-2xl mb-4">จัดการคำขอถอนเงิน</h1>
      <div className="grid grid-cols-7 bg-adopdark p-2 py-6 mb-5">
        <div className="">
          <p className="flex-1 text-white font-bold">id</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ธนาคาร</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">เลขบัญชี</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">จำนวนเงิน</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ชื่อ</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">วันที่ขอ</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold"></p>
        </div>
      </div>
      <div>
        {requests ? (
          requests.length > 0 &&
          requests.map((request, index) => (
            <div className="grid grid-cols-7 p-2 py-6 mb-1 border-b-2" key={index}>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold ">{request.id}</p>
              </div>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold">{request.bank}</p>
              </div>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold">{request.number}</p>
              </div>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold">{request.amount}</p>
              </div>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold">{request.name}</p>
              </div>
              <div className="flex items-center">
                <p className="flex-1 text-gray-600 font-bold">{request.created}</p>
              </div>
              <div className="flex items-center">
                <div className='flex justify-between w-2/4'>
                    <button className='bg-green-500 p-2 px-5 rounded-lg transition hover:bg-green-600' onClick={() => approve(request.id)}>
                        <BsHandThumbsUpFill className='text-white'></BsHandThumbsUpFill>
                    </button>
                    <button className='bg-red-500 p-2 px-5 rounded-lg transition hover:bg-red-600' onClick={() => reject(request.id)}>
                        <BsHandThumbsDownFill className='text-white'></BsHandThumbsDownFill>
                    </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='flex justify-center'>
            <p className='text-gray-600'>ไม่มีคำขอถอนเงิน</p>
          </div>
        )}
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import { getSummary } from '../../services/summary.service';
import { useState } from 'react';
import Dropdown from './dropdown';

export const SummaryData = () => {
  const [summary, setSummary] = useState({});
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const months = [
    { data: null, name: 'ทั้งหมด' },
    { data: 1, name: '1' },
    { data: 2, name: '2' },
    { data: 3, name: '3' },
    { data: 4, name: '4' },
    { data: 5, name: '5' },
    { data: 6, name: '6' },
    { data: 7, name: '7' },
    { data: 8, name: '8' },
    { data: 9, name: '9' },
    { data: 10, name: '10' },
    { data: 11, name: '11' },
    { data: 12, name: '12' },
  ];

  const years = [
    { data: null, name: 'ทั้งหมด' },
    { data: 2023, name: '2023' },
  ];

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    const summary = await getSummary(null, null);
    setSummary(summary.data);
  };

  const handleMonthInpunt = (number) => {
    isetMonth(number);
  };

  const handleYearInpunt = (number) => {
    setYear(number);
  };

  const handleSubmit = async () => {
    const summary = await getSummary(month, year);
    setSummary(summary.data);
  };

  return (
    <div className="w-full">
      <div className="w-1/5">
        <div className="m-3 flex items-end justify-between">
          <div>
            <label className="block text-white font-bold">เดือน</label>
            <Dropdown datas={months} onSelected={handleMonthInpunt} />
          </div>
          <div>
            <label className="block text-white font-bold">ปี</label>
            <Dropdown datas={years} onSelected={handleYearInpunt} />
          </div>
          <button
            className="p-2 rounded-lg bg-blue-600 text-white h-10"
            onClick={handleSubmit}
          >
            ค้นหา
          </button>
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="w-1/2">
          <div className="text-white flex justify-between w-full mt-10 ml-3">
            <div className="flex-1 p-1">
              <div className="bg-orange-400 p-6 rounded-lg h-full">
                <p>จำนานเงินทั้งหมด</p>
                <p className="font-bold text-3xl">{summary.total}</p>
              </div>
            </div>

            <div className="flex-1 p-1">
              <div className="bg-gray-600 p-6 rounded-lg">
                <p>จำนวนเงินจากการประมูล</p>
                <p className="font-bold text-3xl">{summary.auctionTotal}</p>
              </div>
            </div>
            <div className="flex-1 p-1">
              <div className="bg-gray-600 p-6 rounded-lg">
                <p>จำนวนเงินจากการขายสินค้า</p>
                <p className="font-bold text-3xl">{summary.productTotal}</p>
              </div>
            </div>
          </div>
          <div className="text-white flex justify-between w-full mt-10 ml-3">
            <div className="flex-1 p-1">
              <div className="bg-green-600 p-6 rounded-lg">
                <p>รายรับทั้งหมด</p>
                <p className="font-bold text-3xl">{summary.incomeTotal}</p>
              </div>
            </div>
            <div className="flex-1 p-1">
              <div className="bg-green-500 p-6 rounded-lg">
                <p>รายรับจากการประมูล</p>
                <p className="font-bold text-3xl">{summary.incomeAuction}</p>
              </div>
            </div>
            <div className="flex-1 p-1">
              <div className="bg-green-500 p-6 rounded-lg">
                <p>รายรับจากการขายสินค้า</p>
                <p className="font-bold text-3xl">{summary.incomeProduct}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="h-[300px] overflow-y-auto mt-10">
            <p className="text-white font-bold">
              Auction income logs (
              {summary.incomeAuctions && summary.incomeAuctions.length})
            </p>
            <table className="text-white w-full">
              <tr>
                <th>จำนวน</th>
                <th>รายรับ</th>
                <th>วันที่</th>
              </tr>
              {summary.incomeAuctions &&
                summary.incomeAuctions.map((data, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 ? 'bg-adopsoftdark' : 'bg-adopdark'
                    }`}
                  >
                    <td>{data.total}</td>
                    <td className="text-green-400 font-bold">
                      +{data.incomeTotal}
                    </td>
                    <td>{data.createdAt}</td>
                  </tr>
                ))}
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="h-[300px] overflow-y-auto mt-10">
            <p className="text-white font-bold">
              Product income logs (
              {summary.incomeProducts && summary.incomeProducts.length})
            </p>
            <table className="text-white w-full">
              <tr>
                <th>จำนวน</th>
                <th>รายรับ</th>
                <th>วันที่</th>
              </tr>
              {summary.incomeProducts &&
                summary.incomeProducts.map((data, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 ? 'bg-adopsoftdark' : 'bg-adopdark'
                    }`}
                  >
                    <td>{data.total}</td>
                    <td className="text-green-400 font-bold">
                      {' '}
                      +{data.incomeTotal}
                    </td>
                    <td>{data.createdAt}</td>
                  </tr>
                ))}
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import { getSummary } from '../../services/summary.service';
import { useState } from 'react';

export const SummaryData = () => {
  const [summary, setSummary] = useState({});
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    const summary = await getSummary(null, null);
    setSummary(summary.data);
  };

  const handleMonthInpunt = (number) => {
    if (number.length === 0) {
      setMonth(null)
    } else {
      setMonth(number)
    }
  }

  const handleYearInpunt = (number) => {
    if (number.length === 0) {
      setYear(null)
    } else {
      setYear(number)
    }
  }

  const handleSubmit = async () => {
    const summary = await getSummary(month, year);
    setSummary(summary.data);
  }

  return (
    <div className="w-full">
      <div className='m-3'>
        <input className='p-1' type='number' value={month} onChange={(e) => handleMonthInpunt(e.target.value)}/>
        <input className='p-1 ml-2' type='number' value={year} onChange={(e) => handleYearInpunt(e.target.value)}/>
        <button className='p-1 rounded-lg ml-2 bg-blue-600' onClick={handleSubmit}>ค้นหา</button>
      </div>
      <div className="w-full flex justify-around">
        <div className="w-1/2">
          <div className="text-white flex justify-between w-full mt-10 ml-3">
            <div className="bg-red-500 p-6 rounded-lg">
              <p>จำนานเงินทั้งหมด</p>
              <p className="font-bold text-3xl">{summary.total}</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg">
              <p>จำนวนเงินจากการประมูล</p>
              <p className="font-bold text-3xl">{summary.auctionTotal}</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg">
              <p>จำนวนเงินจากการขายสินค้า</p>
              <p className="font-bold text-3xl">{summary.productTotal}</p>
            </div>
          </div>
          <div className="text-white flex justify-between w-full mt-10 ml-3">
            <div className="bg-green-600 p-6 rounded-lg">
              <p>รายรับทั้งหมด</p>
              <p className="font-bold text-3xl">{summary.incomeTotal}</p>
            </div>
            <div className="bg-green-500 p-6 rounded-lg">
              <p>รายรับจากการประมูล</p>
              <p className="font-bold text-3xl">{summary.incomeAuction}</p>
            </div>
            <div className="bg-green-500 p-6 rounded-lg">
              <p>รายรับจากการขายสินค้า</p>
              <p className="font-bold text-3xl">{summary.incomeProduct}</p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className='h-[300px] overflow-y-auto mt-10'>
            <p className="text-white font-bold">Auction income logs</p>
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
                    <td className='text-green-400 font-bold'>+{data.incomeTotal}</td>
                    <td>{data.createdAt}</td>
                  </tr>
                ))}
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='h-[300px] overflow-y-auto mt-10'>
            <p className="text-white font-bold">Product income logs</p>
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
                    <td className='text-green-400 font-bold'> +{data.incomeTotal}</td>
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

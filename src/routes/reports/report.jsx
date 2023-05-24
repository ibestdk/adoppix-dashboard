import { useEffect, useState } from 'react';
import { getReports } from '../../services/report.service';
import { ReportItem } from './reportItem';

export const Report = () => {
  const [reports, setReports] = useState([]);

  const fetchReport = async () => {
    const reports = await getReports();
    setReports(reports);
  };

  const onRemove = (id) => {
    const newReports = reports.filter(x => x.id !== id);
    setReports(newReports);
  }

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <div className="mx-4 mt-10 w-full">
      <h1 className="font-semibold text-2xl">จัดการรายงาน</h1>
      {/* Header */}
      <div className="grid grid-cols-5 bg-adopdark p-2 py-6 mb-5">
        <div className="">
          <p className="flex-1 text-white font-bold">id</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ประเภท</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">คำอธิบาย</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">วันที่รายงาน</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold"></p>
        </div>
      </div>

      <div>
        {reports ? (
          reports.length > 0 &&
          reports.map((report, index) => {
            return (
              <ReportItem report={report} key={index} onRemove={onRemove}/>
            );
          })
        ) : (
          <div>ไม่พบข้อมูล</div>
        )}
      </div>
    </div>
  );
};

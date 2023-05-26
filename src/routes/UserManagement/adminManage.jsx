import { useEffect, useState } from 'react';
import { getAdmins, disableToggle } from '../../services/admin.service';
import { AdminManangeItem } from './adminManageItem';

export const AdminManange = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    const admins = await getAdmins();
    console.log(admins[0].isActive);
    setAdmins(admins)
  };

  const disableAdmin = async (id) => {
    const lastStatusAdmin = await disableToggle(id);
    const index = admins.findIndex((x) => x.id === id);
    const newAdmins = [...admins];
    newAdmins[index].isActive = lastStatusAdmin;
    setAdmins(newAdmins);
  }

  return (
    <div className="mx-4 mt-10 w-full text-white">
      <h1 className="font-semibold text-2xl mb-4">จัดการผู้ดูแลระบบ</h1>
      <div className="grid grid-cols-7 bg-adopsoftdark text-white rounded-lg p-2 py-6 mb-5">
        <div className="">
          <p className="flex-1 text-white font-bold">id</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">อีเมล</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">ชื่อผู้ใช้</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">สถานะ</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">บทบาท</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold">วันที่เข้าร่วม</p>
        </div>
        <div className="">
          <p className="flex-1 text-white font-bold"></p>
        </div>
      </div>
      {admins.length ? (
        admins.map((admin, index) => (
          <AdminManangeItem 
          admin={admin} 
          key={index}
          disableAdmin={disableAdmin}/>
        ))
      ) : (
        <div className='flex justify-center'>
          <p>ไม่มีข้อมูลผู้ดูแลระบบ</p>
        </div>
      )}
    </div>
  );
};

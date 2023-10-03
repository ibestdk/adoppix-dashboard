import { useEffect, useState } from 'react';
import { getAdmins, disableToggle } from '../../services/admin.service';
import { AdminManangeItem } from './adminManageItem';
import ModalAddUser from '../../components/modal/addUser';

export const AdminManange = () => {
  const [admins, setAdmins] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const handleOnAdd = () => setModalAdd(false);
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    const admins = await getAdmins();
    console.log(admins[0].isActive);
    setAdmins(admins);
  };

  const disableAdmin = async (id) => {
    const lastStatusAdmin = await disableToggle(id);
    const index = admins.findIndex((x) => x.id === id);
    const newAdmins = [...admins];
    newAdmins[index].isActive = lastStatusAdmin;
    setAdmins(newAdmins);
  };

  return (
    <div className=" mx-10 mt-10 text-black ">
      <ModalAddUser
        visible={modalAdd}
        onClose={handleOnAdd}
        title={'เพิ่มผู้ดูแล'}
        body={''}
        w={800}
        mxh={1600}
      />

      <div className=" w-full text-black">
        <h1 className="font-semibold text-2xl mb-4">จัดการผู้ดูแลระบบ</h1>

        <div className="flex justify-between">
          <div className="flex space-x-2 text-white">
            <div className="p-2 bg-cu rounded-md">Admin</div>
            <div className="p-2 bg-cu rounded-md">TA</div>
            <div className="p-2 bg-cu rounded-md">Teacher</div>
          </div>
          <div>
            <div onClick={() => setModalAdd(true)} className="px-4 py-2 bg-cu text-white rounded-md cursor-pointer">
              เพิ่มผู้ดูแล
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center  space-x-3 bg-pink-500 p-4 rounded-md text white">
          <div className="w-1/12">
            <p className="flex-1 text-white font-bold">id</p>
          </div>
          <div className="w-2/12">
            <p className="flex-1 text-white font-bold">อีเมล</p>
          </div>
          <div className="w-2/12">
            <p className="flex-1 text-white font-bold">ชื่อผู้ใช้</p>
          </div>
          <div className="w-1/12">
            <p className="flex-1 text-white font-bold text-center">สถานะ</p>
          </div>
          <div className="w-1/12 text-center">
            <p className="flex-1 text-white font-bold">บทบาท</p>
          </div>
          <div className="w-2/12">
            <p className="flex-1 text-white font-bold">วันที่เข้าร่วม</p>
          </div>
          <div className="w-3/12">
            <p className="flex-1 text-white font-bold"></p>
          </div>
        </div>
        {admins.length ? (
          admins.map((admin, index) => (
            <AdminManangeItem
              admin={admin}
              key={index}
              index={index}
              disableAdmin={disableAdmin}
            />
          ))
        ) : (
          <div className="flex justify-center">
            <p>ไม่มีข้อมูลผู้ดูแลระบบ</p>
          </div>
        )}
      </div>
    </div>
  );
};

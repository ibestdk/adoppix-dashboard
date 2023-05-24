import { FaRegTimesCircle } from 'react-icons/fa';

export const AdminManangeItem = ({ admin, key, disableAdmin }) => {
  const statusClass = (admin.isActive) ? 'text-green-600' : 'text-red-600';
  const combindStatusClass = `flex-1 text-gray-600 font-bold ${statusClass}`

  const roleNameClass = (admin.roleName === 'super admin') ? 'text-yellow-400' : 'text-blue-600';
  const combindRoleNameClass = `flex-1 font-bold ${roleNameClass}`;
  return (
    <div className="grid grid-cols-7 p-2 py-6 mb-1 border-b-2" key={key}>
      <div className="flex items-center">
        <p className="flex-1 text-gray-600 font-bold ">{admin.id}</p>
      </div>
      <div className="flex items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.email}</p>
      </div>
      <div className="flex items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.username}</p>
      </div>
      <div className="flex items-center">
        <p className={combindStatusClass}>
          {(admin.isActive) ? 'เปิดการใช้งาน' : 'ปิดการใช้งาน'}
        </p>
      </div>
      <div className="flex items-center">
        <p className={combindRoleNameClass}>{admin.roleName}</p>
      </div>
      <div className="flex items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.createdAt}</p>
      </div>
      <div className="flex items-center">
        <div className="flex justify-between w-2/4">
          <button className="bg-red-500 p-2 rounded-full transition hover:bg-red-600" onClick={() => disableAdmin(admin.id)}>
            <FaRegTimesCircle className="text-white text-2xl"></FaRegTimesCircle>
          </button>
        </div>
      </div>
    </div>
  );
};
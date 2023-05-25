import { FaRegTimesCircle, FaCheck } from 'react-icons/fa';
import { disableToggle } from '../../services/admin.service';
import { useEffect, useState } from 'react';
import './adminManageItem.css';

export const AdminManangeItem = ({ admin }) => {
  const [isActive, setIsActive] = useState(admin.isActive);
  const [isActiveClass, setIsActiveClass] = useState('');
  const [isDisableAdminLoading, setIsDisableAdminLoading] = useState(false);

  const roleNameClass =
    admin.roleName === 'super admin' ? 'text-yellow-400' : 'text-blue-600';
  const combindRoleNameClass = `flex-1 font-bold ${roleNameClass}`;

  useEffect(() => {
    const statusClass = isActive ? 'text-green-600' : 'text-red-600';
    const combindStatusClass = `flex-1 text-gray-600 font-bold ${statusClass}`;

    setIsActiveClass(combindStatusClass);
  }, [isActive]);

  const disableAdmin = async () => {
    setIsDisableAdminLoading(true);
    const lastStatusAdmin = await disableToggle(admin.id);
    if (lastStatusAdmin.status) {
      setIsActive(lastStatusAdmin.data);
    }
    setIsDisableAdminLoading(false);
  };

  return (
    <div className="grid grid-cols-7 p-2 py-6 mb-1 border-b-2">
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
        {isDisableAdminLoading ? (
          <svg
            class="animate-spin w-[25px] text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <p className={isActiveClass}>
            {isActive ? 'เปิดการใช้งาน' : 'ปิดการใช้งาน'}
          </p>
        )}
      </div>
      <div className="flex items-center">
        <p className={combindRoleNameClass}>{admin.roleName}</p>
      </div>
      <div className="flex items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.createdAt}</p>
      </div>
      <div className="flex items-center">
        <div className="flex justify-between w-2/4">
          <div class="flex items-center justify-center">
            <label
              htmlFor={admin.id}
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={admin.id}
                  className="sr-only"
                  defaultChecked={isActive}
                  onChange={(e) => disableAdmin()}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

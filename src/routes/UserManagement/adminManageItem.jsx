import { FaRegTimesCircle, FaCheck } from 'react-icons/fa';
import { disableToggle } from '../../services/admin.service';
import { useEffect, useState } from 'react';
import './adminManageItem.css';

export const AdminManangeItem = ({ admin , index }) => {
  const [isActive, setIsActive] = useState(admin.isActive);
  const [isDisableAdminLoading, setIsDisableAdminLoading] = useState(false);

  const roleNameClass =
    admin.roleName === 'super admin' ? 'text-yellow-400' : 'text-blue-600';

  useEffect(() => {
    setIsDisableAdminLoading(false);
  }, [isActive]);

  const disableAdmin = async () => {
    setIsDisableAdminLoading(true);
    const lastStatusAdmin = await disableToggle(admin.id);
    if (lastStatusAdmin.status) {
      setIsActive(lastStatusAdmin.data);
    }
  };

  return (
    <div className={`${index % 2 === 0 ? "bg-white" : "bg-adoplight "} flex justify-between items-center space-x-3 p-2 py-6  border-b-2`}>
      <div className="flex w-1/12 items-center">
        <p className="flex-1 text-gray-600 font-bold ">{admin.id}</p>
      </div>
      <div className="flex w-2/12 items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.email}</p>
      </div>
      <div className="flex w-2/12 items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.username}</p>
      </div>
      <div className="flex w-1/12 items-center">
        {isDisableAdminLoading ? (
          <svg
            className="animate-spin w-5 h-5 text-gray-700"
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
          <p
            className={`text-center font-bold ${
              isActive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isActive ? 'เปิดการใช้งาน' : 'ปิดการใช้งาน'}
          </p>
        )}
      </div>
      <div className="flex w-1/12 items-center text-center">
        <p className={`flex-1 ${roleNameClass} font-bold`}>{admin.roleName}</p>
      </div>
      <div className="flex w-2/12 items-center">
        <p className="flex-1 text-gray-600 font-bold">{admin.createdAt}</p>
      </div>
      <div className="flex w-3/12 items-center">
        <div className="flex relative justify-between w-2/4">
          <div className="flex items-center justify-center">
            <label
              htmlFor={admin.id}
              className="flex items-center cursor-pointer"
            >
              <div className="relative z-0">
                <input
                  type="checkbox"
                  id={admin.id}
                  className="sr-only"
                  defaultChecked={isActive}
                  disabled={isDisableAdminLoading}
                  onChange={disableAdmin}
                />
                <div
                  className={`block w-14 h-8 rounded-full duration-300 ${
                    isActive ? 'bg-green-400' : 'bg-gray-300'
                  }`}
                ></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

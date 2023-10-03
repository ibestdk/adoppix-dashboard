import { useState } from 'react';
import { registerAdmin } from '../../services/admin.service';

export const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async () => {
    setRegisterStatus(false);
    setIsLoading(true);
    const result = await registerAdmin(email, username, password);
    console.log(result);
    if (result.status === true) {
      setRegisterStatus(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="mx-4 mt-10 w-full flex justify-center items-center">
      <div className="w-[400px] bg-adopsoftdark  rounded-lg p-5 text-white">
        <h1 className="font-semibold text-2xl mb-4">ลงทะเบียนผู้ดูแล</h1>
        <div className="w-full">
          <div className="w-full mb-4">
            <p className="mb-1">อีเมล</p>
            <input
              type="email"
              className="p-1 w-full bg-white rounded-lg"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="w-full mb-4">
            <p className="mb-1">ชื่อผู้ใช้</p>
            <input
              type="text"
              className="p-1 w-full bg-white rounded-lg"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div className="w-full mb-4">
            <p className="mb-1">รหัสผ่าน</p>
            <input
              type="password"
              className="p-1 w-full bg-white rounded-lg"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="w-full mb-4">
            <p className="mb-1">ยืนยันรหัสผ่าน</p>
            <input
              type="password"
              className="p-1 w-full bg-white rounded-lg"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
          </div>
          <div className="w-full mb-4 mt-8">
            <button
              disabled={isLoading}
              className="bg-green-500 w-full bg-white p-2 text-white font-bold rounded-lg hover:bg-green-600 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
              onClick={handleSubmit}
            >
              ลงทะเบียนผู้ดูแล
            </button>
            {registerStatus && (
              <p className="text-green-600">ลงทะเบียนผู้ดูแลสำเร็จ</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import axios from 'axios';
import { useState } from 'react';
import { authenicate } from '../../services/authorize';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        'https://api.backoffice.adoppix.com/api/User/login',
        formData,
        config
      );
      if (response.status) {
        authenicate(response, () => {navigate('/');  window.location.reload();});
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const jsonData = {
  //     email: formData.get('email'),
  //     password: formData.get('password'),
  //   };
  //   try {
  //     const response = await axios.post(
  //       'https://api.backoffice.adoppix.com/api/User/login',
  //       jsonData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     // if (response.status === 204) {
  //     //   authenticate(res, () => navigate('/'));
  //     // } else {
  //       // console.log(response);
  //       // }
  //       console.log(response);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  return (
    <div className="h-screen w-screen bg-adopdark text-white flex justify-center items-center">
      <div className="w-[380px] bg-adopsoftdark rounded-lg p-10">
        <div>
          <div className="text-2xl text-center text-adoppix font-bold">
            AdopPix
          </div>
          <div className="text-2xl text-center">Back Office</div>
          <div></div>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="">อีเมล</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@adoppix.com"
                required={true}
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-lg h-10 bg-adopdark m-2 px-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">รหัสผ่าน</label>
              <input
                id="password"
                name="password"
                type="password"
                required={true}
                value={formData.password}
                onChange={handleInputChange}
                className="rounded-lg h-10 bg-adopdark m-2 px-2"
              />
            </div>
            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="bg-adoppix w-full rounded-lg h-10 mt-8 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className='flex justify-center'>
                    <svg
                      className="animate-spin w-[24px] text-white"
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
                  </div>
                ) : (
                  <p>เข้าสู่ระบบ</p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

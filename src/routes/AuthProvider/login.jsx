import axios from 'axios';
import { useState } from 'react';
import { authenicate } from '../../services/authorize';
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
      const response = await axios.post(
        'https://api.backoffice.adoppix.com/api/User/login',
        formData,
        config
      );
      console.log(response.data);
      if (response.status) {
        authenicate(response, () => navigate('/'));
      }
    } catch (error) {
      console.error(error);
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
                type="submit"
                className="bg-adoppix w-full rounded-lg h-10 mt-8"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

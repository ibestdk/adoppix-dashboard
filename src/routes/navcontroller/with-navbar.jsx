import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';
import { useState } from 'react';

export const WithNav = () => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="flex">
      <NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="w-full">
        <div className="h-[60px] w-full bg-[#fffff] shadow-lg bg-white"></div>
        <div
          className={` ${
            navOpen ? 'ml-[240px] w-[87vw]' : 'ml-[40px] w-[96vw]'
          } duration-300 p-5`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';

export const WithNav = () => {


  return (
    <div className='flex'>
      <NavBar />
      <Outlet />
    </div>
  );
};

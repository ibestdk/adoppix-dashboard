import { useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
import { BiLogOut ,BiMoneyWithdraw } from 'react-icons/bi';
import { MdOutlinePermMedia, MdOutlineRedeem , MdReportGmailerrorred} from 'react-icons/md';

import { BsClipboardData } from 'react-icons/bs';
import { useNavigate, NavLink } from "react-router-dom";
import { logout } from '../../services/authorize';
export const NavBar = () => {
    const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(true);
  const [navSelect, setNavSelect] = useState(0);
  const [navSubOpen, setNavSubOpen] = useState(false);

  const handleOpenNav = () => {
    setNavOpen(!navOpen);
    if (navOpen === true) {
        setNavSubOpen(false)
    }
    else{
        setNavSubOpen(true)
    }
  };

  
  const resetRoute = () => {
    navigate("/login");
    setTimeout(() => {
      location.reload();
    }, 500);

    console.log("repage")
  };

  const handleSelectNav = (id) => {
    if (id === navSelect) {
      setNavSelect(0);
      setNavSubOpen(false);
    } else {
      setNavSelect(id);
      setNavSubOpen(true)
    }
  };
  return (
    <div>
      <div
        className={`h-[100vh] ${
          navOpen ? 'w-[240px] ' : 'w-[40px] '
        } bg-adopdark text-white duration-300 flex flex-col justify-between text-clip`}
      >
        <div>
          <div className="flex justify-between mb-5 border-b pb-5">
            {navOpen && (
              <div className="flex flex-col text-center justify-center w-full mt-5">
                <div className="text-2xl font-bold">AdopPix</div>
                <div className="text-2xl font-semibold text-white">
                  DashBoard
                </div>
              </div>
            )}
            <div className="w-[45px] ">
              <HiChevronLeft
                onClick={handleOpenNav}
                className={`${
                  navOpen ? '' : 'rotate-180'
                }  duration-300 text-[2.5rem]`}
              />
            </div>
          </div>
          <div>
            <div>
              <div
                onClick={() => handleSelectNav(1)}
                className="text-xl flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <BsClipboardData className="mx-2" />
                {navOpen && <div>Summary Data</div>}
              </div>

              <div
                className={`${
                  navSelect === 1 && navSubOpen === true ? 'h-[132px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden `}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>In Come</div>
                </div>
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>Rate</div>
                </div>
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>Ads</div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(2)}
                className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <MdOutlinePermMedia className="mx-2 text-xl" />
                {navOpen && <div className="text-lg">การจัดการสื่อ</div>}
              </div>

              <div
                className={`${
                  navSelect === 2 && navSubOpen === true  ? 'h-[44px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden`}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <NavLink to="banner" >Banner</NavLink>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(3)}
                className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <MdOutlineRedeem className="mx-2 text-xl" />
                {navOpen && <div className="text-lg">รหัสกิจกรรม</div>}
              </div>

              <div
                className={`${
                  navSelect === 3 && navSubOpen === true ? 'h-[44px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden`}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>In Come</div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(4)}
                className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <MdReportGmailerrorred className="mx-2 text-xl" />
                {navOpen && <div className="text-lg">การรายงาน</div>}
              </div>

              <div
                className={`${
                  navSelect === 4 && navSubOpen === true  ? 'h-[44px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden`}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>In Come</div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(5)}
                className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <BiMoneyWithdraw className="mx-2 text-xl" />
                {navOpen && <div className="text-lg">คำขอถอนเงิน</div>}
              </div>

              <div
                className={`${
                  navSelect === 5 && navSubOpen === true ? 'h-[44px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden`}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>In Come</div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(6)}
                className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2"
              >
                <RiAdminLine className="mx-2 text-xl" />
                {navOpen && <div className="text-lg">พนักงาน</div>}
              </div>

              <div
                className={`${
                  navSelect === 6&& navSubOpen === true  ? 'h-[44px]' : ' h-[0px]'
                } duration-300 bg-adoppix overflow-hidden`}
              >
                <div className="text-xl pl-14 flex items-center hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
                  <div>In Come</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => logout(() => resetRoute())}  
          className=" flex items-center bg-adopdark hover:bg-adopsoftdark duration-300 cursor-pointer py-2">
            <BiLogOut className="mx-2 text-xl" />
            {navOpen && <div className="text-lg">Logout</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronUp } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
import { FaBloggerB } from 'react-icons/fa';
import { BiLogOut, BiMoneyWithdraw } from 'react-icons/bi';
import {
  MdOutlinePermMedia,
  MdOutlineRedeem,
  MdReportGmailerrorred,
} from 'react-icons/md';
import { AiFillWechat } from 'react-icons/ai';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { FaDocker } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from '../../services/authorize';
import { checkIsSuperAdmin } from '../../services/authorize';
export const NavBar = ({navOpen , setNavOpen}) => {
  const navigate = useNavigate();

  // const [navOpen, setNavOpen] = useState(true);
  const [navSelect, setNavSelect] = useState(0);
  const [menuSelect, setMenuSelect] = useState('main');

  const [navSubOpen, setNavSubOpen] = useState(false);
  const [isSa, setIsSa] = useState(false);

  useEffect(() => {
    fetchIsSa();
  }, []);

  const fetchIsSa = async () => {
    const result = await checkIsSuperAdmin();
    setIsSa(result.data);
  };

  const handleOpenNav = () => {
    setNavOpen(!navOpen);
    if (navOpen === true) {
      setNavSubOpen(false);
    } else {
      setNavSubOpen(true);
    }
  };

  const resetRoute = () => {
    navigate('/login');
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  const handleSelectNav = (id) => {
    if (id === navSelect) {
      setNavSelect(0);
      setNavSubOpen(false);
    } else {
      setNavSelect(id);
      setNavSubOpen(true);
    }
  };
  return (
    <div className="fixed">
      <div
        className={`h-[100vh] ${
          navOpen ? 'w-[240px] ' : 'w-[40px] '
        } bg-[#292e40]  text-white duration-300 flex flex-col justify-between text-clip`}
      >
        <div>
          <div className="flex justify-between mb-5  pb-5">
            {navOpen && (
              <div className="flex flex-col text-center justify-center w-full mt-5">
                <div className="text-2xl font-bold">TA Service</div>
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
                onClick={() => handleSelectNav(2)}
                className={`${navSelect === 2 ? "brightness-90" : ""} flex items-center justify-between bg-pink-500  hover:brightness-110 duration-300 cursor-pointer py-2`}
              >
                <div className='flex items-center'>
                <FaDocker className="mx-2 text-2xl" />
                  {navOpen && <div className="text-lg">Docker</div>}
                </div>
                <HiChevronUp
                  className={`${
                    navSelect === 2 ? "" : 'rotate-180'
                  }  duration-300 text-[2rem]`}
                />
              </div>
              <div className=" shadow-inner">
                <DropDownMenu
                  submenu={'e0'}
                  navId={2}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'รายงานผล'}
                  setMenuSelect={setMenuSelect}
                  route={'docker'}
                />
          
                <DropDownMenu
                  submenu={'e2'}
                  navId={2}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'อัพโหลดข้อสอบ'}
                  setMenuSelect={setMenuSelect}
                  route={'upload-docker-answer'}
                />
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(4)}
                className={`${navSelect === 4 ? "brightness-90" : ""} flex items-center justify-between bg-pink-500  hover:brightness-110 duration-300 cursor-pointer py-2`}
              >
                <div className='flex items-center'>
                  <RiFileExcel2Fill className="mx-2 text-xl" />
                  {navOpen && <div className="text-lg">Excel</div>}
                </div>
                <HiChevronUp
                  className={`${
                    navSelect === 4 ? "" : 'rotate-180'
                  }  duration-300 text-[2rem]`}
                />
              </div>
              <div className=" shadow-inner">
                <DropDownMenu
                  submenu={'e0'}
                  navId={4}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'รายงานผล'}
                  setMenuSelect={setMenuSelect}
                  route={'excel'}
                />

                <DropDownMenu
                  submenu={'e2'}
                  navId={4}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'ชุดคำตอบ'}
                  setMenuSelect={setMenuSelect}
                  route={'upload-teacher-answer'}
                />
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(3)}
                className={`${navSelect === 3 ? "brightness-90" : ""} flex items-center justify-between bg-pink-500  hover:brightness-110 duration-300 cursor-pointer py-2`}
              >
                <div className='flex items-center'>
                  <FaBloggerB className="mx-2 text-xl" />
                  {navOpen && <div className="text-lg">Blog</div>}
                </div>
                <HiChevronUp
                  className={`${
                    navSelect === 3 ? "" : 'rotate-180'
                  }  duration-300 text-[2rem]`}
                />
              </div>
              <div className=" shadow-inner">
                <DropDownMenu
                  submenu={'c0'}
                  navId={3}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'blog'}
                  setMenuSelect={setMenuSelect}
                  route={'blog'}
                />
                
              </div>
            </div>
            <div>
              <div
                onClick={() => handleSelectNav(5)}
                className={`${navSelect === 5 ? "brightness-90" : ""} flex items-center justify-between bg-pink-500  hover:brightness-110 duration-300 cursor-pointer py-2`}
              >
                <div className='flex items-center'>
                <RiAdminLine className="mx-2 text-xl" />
                  {navOpen && <div className="text-lg">User</div>}
                </div>
                <HiChevronUp
                  className={`${
                    navSelect === 5 ? "" : 'rotate-180'
                  }  duration-300 text-[2rem]`}
                />
              </div>
              <div className=" shadow-inner">
                <DropDownMenu
                  submenu={'f0'}
                  navId={5}
                  navSelect={navSelect}
                  menuSelect={menuSelect}
                  navSubOpen={navSubOpen}
                  textMenu={'จัดการผู้ใช้'}
                  setMenuSelect={setMenuSelect}
                  route={'user/management'}
                />
             
              </div>
            </div>
 

           
          </div>
        </div>
        <div>
          <div
            onClick={() => logout(() => resetRoute())}
            className=" flex items-center bg-pink-500  hover:brightness-110 duration-300 cursor-pointer py-2"
          >
            <BiLogOut className="mx-2 text-xl" />
            {navOpen && <div className="text-lg">Logout</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DropDownMenu = ({
  submenu,
  navId,
  navSelect,
  menuSelect,
  navSubOpen,
  textMenu,
  setMenuSelect,
  route,
}) => {
  return (
    <div
      className={`${
        navSelect === navId && navSubOpen === true ? 'h-[44px]' : ' h-[0px]'
      } duration-300  ${
        menuSelect === submenu ? 'bg-pink-500' : 'bg-pink-400 '
      }  overflow-hidden`}
    >
      <div className="text-xl pl-14 flex items-center hover:brightness-110 duration-300 cursor-pointer py-2">
        <NavLink to={route} onClick={() => setMenuSelect(submenu)}>
          {textMenu}
        </NavLink>
      </div>
    </div>
  );
};

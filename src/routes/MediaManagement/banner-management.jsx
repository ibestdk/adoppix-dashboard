import { useEffect } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { BsFillTrashFill } from 'react-icons/bs';
import { getToken } from '../../services/authorize';
import { useState } from 'react';
import ModalAdd from './create/modalCreate';
import ModalDelete from './delete/modalDelete';
import { getBanner } from '../../services/banner.service';
export const BannerManager = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [modalDeleteOpen, setDeleteModal] = useState(false);
  const [bannerList, setBannerList] = useState([]);
  const [bannerToDelete, setBannerToDelete] = useState();
  const handleOnClose = () => setOpenModal(false);
  const handleOnCloseModalDelete = () => setDeleteModal(false);
  const fetchBanner = async () => {
    const token = getToken();
    const response = await getBanner(token);
    setBannerList(response);
    console.log('response', response);
  };

  const callDeleteModal = (banner) => {
    setDeleteModal(true);
    setBannerToDelete({ id: banner.id, name: banner.name });
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div className="p-5 w-full h-full">
      <div className="h-[90vh] w-[100%]">
        <div className="w-full flex justify-end items-center">
          <div
            onClick={() => setOpenModal(true)}
            className="flex py-2 px-4 rounded bg-adopsoftdark hover:bg-gray-500 transition text-white cursor-pointer"
          >
            <div className="flex items-center">
              <IoMdAddCircleOutline />
            </div>
            <div>เพิ่ม Banner</div>
          </div>
        </div>
        <div className="mt-4 p-4 h-full w-full rounded">
          <div className=" ">
            <div className="">
              <div className="text-white rounded-lg w-full  flex py-5 bg-adopsoftdark">
                <div className="w-[5%] flex justify-center">id</div>
                <div className="flex justify-center w-[50%]">รูปภาพ</div>
                <div className="flex justify-center w-[20%]">ลิ้งค์</div>
                <div className="flex justify-center w-[25%]"></div>
              </div>
            </div>
            {bannerList && bannerList.length > 0 ? (
              <div className="">
                {bannerList.length > 0 &&
                  bannerList.map((banner, index) => (
                    <div
                      className="flex  items-center text-gray-800 w-full py-3  border-b-2"
                      key={index}
                    >
                      <div className="w-[5%] flex justify-center">
                        {banner.id}
                      </div>
                      <div className="w-[50%]">
                        <img
                          className="rounded-lg h-[150px]"
                          src={`https://pix.adoppix.com/public/${banner.name}`}
                          alt=""
                        />
                      </div>
                      <div className="w-[20%] justify-center text-center">
                        {banner.link}
                      </div>
                      <ModalDelete
                        onClose={handleOnCloseModalDelete}
                        visible={modalDeleteOpen}
                        banner={bannerToDelete}
                        reset={fetchBanner}
                      />
                      <div className="w-[25%]">
                        <div className="flex justify-center items-center">
                          <BsFillTrashFill
                            onClick={() => callDeleteModal(banner)}
                            className="text-white bg-red-600 hover:brightness-75 transition p-2 rounded-full text-4xl cursor-pointer"
                          ></BsFillTrashFill>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div>ไม่พบข้อมูล</div>
            )}
          </div>
        </div>
      </div>
      <ModalAdd onClose={handleOnClose} visible={modalOpen} />
    </div>
  );
};

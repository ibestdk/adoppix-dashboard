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
  const [bannerToDelete,  setBannerToDelete] = useState();
  const handleOnClose = () => setOpenModal(false);
  const handleOnCloseModalDelete = () => setDeleteModal(false);
  const fetchBanner = async () => {
    const token = getToken();
    const response = await getBanner(token);
    setBannerList(response);
    console.log('response', response);
  };
  
const callDeleteModal = (banner) =>{
    setDeleteModal(true);  
    setBannerToDelete({ id: banner.id, name: banner.name })
}

  useEffect(() => {
  
    fetchBanner();
  }, []);
  return (
    <div className="p-5 w-full h-full">
      <div className="h-[90vh] w-[100%]">
        <div className="w-full flex justify-end items-center">
          <div
            onClick={() => setOpenModal(true)}
            className="flex py-2 px-4 rounded text-white bg-adopsoftdark"
          >
            <div className="flex items-center">
              <IoMdAddCircleOutline />
            </div>
            <div>เพิ่ม Banner</div>
          </div>
        </div>
        <div className="mt-4 p-4 h-full w-full bg-adopsoftdark rounded">
          <div className=" ">
            <div className="">
              <div className="text-white rounded-lg w-full  flex py-5 bg-adopdark">
                <div className="w-[5%] flex justify-center">Id</div>
                <div className="flex justify-center w-[50%]">Image</div>
                <div className="flex justify-center w-[20%]">Route</div>
                <div className="flex justify-center w-[25%]">Action</div>
              </div>
            </div>
            {bannerList && bannerList.length > 0 ? (
              <div className="">
                {bannerList.length > 0 &&
                  bannerList.map((banner, index) => (
                    <div
                      className="flex  items-center text-white w-full bg-adopdark my-1 py-2 rounded-lg px-4"
                      key={index}
                    >
                      <div className="flex w-[5%] justify-center items-center px-6">
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
                        RouterPath
                      </div>
                      <ModalDelete
                        onClose={handleOnCloseModalDelete}
                        visible={modalDeleteOpen}
                        banner={bannerToDelete}
                        reset={fetchBanner}
                      />
                      <div className="w-[25%]">
                        <div className="flex justify-center items-center">
                          <div onClick={() => callDeleteModal(banner)} className="flex items-center bg-red-500 rounded py-2 px-4">
                            <BsFillTrashFill className="mr-2" />
                            <div>ลบ</div>
                          </div>
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

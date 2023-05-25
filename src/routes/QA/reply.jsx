import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { replyQa, getReplies } from '../../services/qa.service';

export const Reply = ({ qaId, isOpenReply, onCloseReply }) => {
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState([])
  const [messageInput, setMessageInput] = useState('');
  const [isLoadingSendMessage, setIsLoadingSendMessage] = useState(false);
  const cancelButtonRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [reply])

  useEffect(() => {
    setOpen(isOpenReply)
  }, [isOpenReply])

  useEffect(() => {
    if (open === false) {
      onCloseReply();
    } else {
      fetchReply();
    }
  }, [open]);

  useEffect(() => {
  }, [messageInput]);

  const fetchReply = async () => {
    const result = await getReplies(qaId);
    setReply(result.data);
  }

  const onReply = async () => {
    setIsLoadingSendMessage(true);
    const result = await replyQa(qaId, messageInput);
    const newReplies = [...reply, result.data];
    setReply(newReplies);
    setMessageInput('');
    setIsLoadingSendMessage(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        การตอบกลับ
                        <hr></hr>
                      </Dialog.Title>
                      <div className="mt-2 h-80 overflow-y-auto">
                        { reply.length > 0 ? (
                          reply.map((r, index) => (
                            <div key={index} className='mt-4'>
                              <p className='font-bold text-gray-700'>{r.username}</p>
                              <p className=''>{r.message}</p>
                              <p className='text-sm text-gray-400 mt-1'>{r.createAt}</p>
                            </div>
                          ))
                        ) : (
                          <div className='flex justify-center mt-3'>
                            <p>ไม่มีการตอบกลับ</p>
                          </div>
                        )}
                        <div ref={scrollRef} />
                      </div>
                      <hr className='mt-2'></hr>
                      <div className='relative mt-5 overflow-hidden w-full'>
                        <input 
                        type='text' 
                        className='p-1 rounded-lg w-full border-gray-300 disabled:bg-gray-300' 
                        value={messageInput} 
                        onChange={(e) => setMessageInput(e.target.value)}
                        disabled={isLoadingSendMessage}/>
                        <button 
                        disabled={isLoadingSendMessage}
                        className='absolute right-0 top-0 bottom-0 m-auto rounded-lg px-3 bg-blue-500 text-white cursor-pointer hover:bg-blue-800 transition disabled:bg-gray-500 disabled:cursor-not-allowed' onClick={onReply}>ตอบกลับ</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    ยกเลิก
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

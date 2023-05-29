import React, { useEffect, useState } from 'react';

const Dropdown = ({ datas, onSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(datas[0].name)
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-20">
      <button
        type="button"
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        onClick={toggleDropdown}
      >
        {selected}
      </button>

      {isOpen && (
        <div className="
        absolute 
        z-10 
        w-full mt-2 bg-white rounded-md shadow-lg">
          <ul>
            {datas &&
              datas.map((data, index) => (
                <li className="px-4 py-2 cursor-pointer" key={index} onClick={() => {
                    setSelected(data.name);
                    onSelected(data.data);
                }}>{ data.name }</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

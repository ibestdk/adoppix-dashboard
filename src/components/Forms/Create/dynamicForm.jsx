import React, { useState } from 'react';

export const DynamicCreate = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Item 1", subitems: ["Subitem 1", "Subitem 2"] },
        { id: 2, text: "Item 2", subitems: ["Subitem 1", "Subitem 2"] },
        { id: 3, text: "Item 3", subitems: ["Subitem 1", "Subitem 2"] },
      ]);
    
      const moveItemLeft = (index) => {
        if (index > 0) {
          const updatedItems = [...items];
          const temp = updatedItems[index];
          updatedItems[index] = updatedItems[index - 1];
          updatedItems[index - 1] = temp;
          setItems(updatedItems);
        }
      };
    
      const moveItemRight = (index) => {
        if (index < items.length - 1) {
          const updatedItems = [...items];
          const temp = updatedItems[index];
          updatedItems[index] = updatedItems[index + 1];
          updatedItems[index + 1] = temp;
          setItems(updatedItems);
        }
      };
    
      return (
        <div>
          <h1 className="text-2xl font-semibold mb-4">List Swapper</h1>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="flex flex-col space-y-2 transition-transform duration-500"
                style={{
                  transform: `translateX(0px)` // Initial position
                }}
              >
                <span className="text-lg">{item.text}</span>
                <ul className="space-y-2">
                  {item.subitems.map((subitem, subIndex) => (
                    <li key={subIndex}>{subitem}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <button
                    onClick={() => moveItemLeft(index)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Move Left
                  </button>
                  <button
                    onClick={() => moveItemRight(index)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    Move Right
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
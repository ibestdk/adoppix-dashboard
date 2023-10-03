import React from 'react';

const RawJsonDisplay = () => {
  const jsonData = [
    {
      "id": 7,
      "name": "2e6b6f3b-65c7-48dc-869a-0b8edfb640da.png",
      "link": "https://adoppix.com/"
    }
  ];

  return (
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  );
};

export default RawJsonDisplay;
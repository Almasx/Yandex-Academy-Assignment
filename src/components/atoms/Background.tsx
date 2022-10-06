import React from "react";

const Background = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 px-[15] flex flex-row ">
      {Array(9).fill(
        <div className="flex-grow border-l border-stroke-100"></div>
      )}
    </div>
  );
};

export default Background;

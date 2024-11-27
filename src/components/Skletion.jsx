import React from "react";

const Skletion = ({ className }) => {
  return (
    <div role="status" className=" animate-pulse">
      <div className={` bg-stone-200  dark:bg-stone-700 ${className}`}></div>
    </div>
  );
};

export default Skletion;

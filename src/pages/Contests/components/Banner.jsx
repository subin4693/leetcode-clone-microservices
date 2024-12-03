import React from "react";
import Trophy from "../../../assets/trophy.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-orange-900 to-stone-900 relative">
      <div className={`h-[50vh] opacity-70 `}>
        <img src={Trophy} className="w-full h-full object-cover" />
      </div>
      <div
        className="p-3 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-900 to-orange-900
      rounded-sm shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h1 className="text-3xl font-mono drop-shadow-3xl font-bold ">
          Leetcode contest
        </h1>
      </div>
    </div>
  );
};

export default Banner;

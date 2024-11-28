import React from "react";

const PastContestCard = ({ image, title, date }) => {
  return (
    <div className="flex justify-between items-center group cursor-pointer  bg">
      <div className="flex items-center gap-5">
        <div className="h-20 w-40 rounded-md overflow-hidden">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="group-hover:text-blue-500">{title}</p>
          <span> {date}</span>
        </div>
      </div>
      <button className="bg-stone-700 px-3 py-1 rounded-md hover:bg-stone-600">
        View
      </button>
    </div>
  );
};

export default PastContestCard;

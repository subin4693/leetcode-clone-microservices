import React from "react";

const ContestCard = ({ _id, image, title, date }) => {
  return (
    <div className="overflow-hidden rounded-md bg-stone-800">
      <div>
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3>{date}</h3>
      </div>
    </div>
  );
};

export default ContestCard;

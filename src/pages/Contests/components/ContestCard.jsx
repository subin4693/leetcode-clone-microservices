import React from "react";
import { Link } from "react-router-dom";

const ContestCard = ({ _id, image, title, date, time }) => {
  return (
    <Link to={`/problems/${_id}`}>
      <div className="overflow-hidden rounded-md bg-stone-800">
        <div>
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3>Date : {date.split("T")[0]}</h3>
          <h4>Time : {time}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ContestCard;

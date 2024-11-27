import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Tabs = ({ category, _id }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const routeParams = params.get("category");

  return (
    <div
      className={` rounded-full py-1 px-3 cursor-pointer ${
        routeParams == _id ? "bg-white text-black" : "bg-stone-700"
      } `}
      onClick={() => {
        navigate(`/problems?category=${_id}`);
      }}
    >
      {category}
    </div>
  );
};

export default Tabs;

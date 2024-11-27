import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  let isLogin = false;
  return (
    <header className=" py-3 bg-stone-800 w-screen flex justify-center">
      <nav className=" w-[95vw] lg:w-[70%]  flex justify-between items-center">
        <ul className="flex gap-6">
          <li className=" ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-white  cursor-pointer  text-white  border-b py-3 border-b-[2px]"
                  : " text-slate-300 hover:text-white  cursor-pointer "
              }
            >
              Home
            </NavLink>

            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <NavLink
              to="/problems"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-white  cursor-pointer  text-white  border-b py-3 border-b-[2px]"
                  : " text-slate-300 hover:text-white  cursor-pointer "
              }
            >
              Problems
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contests"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-white  cursor-pointer  text-white  border-b py-3 border-b-[2px]"
                  : " text-slate-300 hover:text-white  cursor-pointer "
              }
            >
              Contest
            </NavLink>
          </li>
        </ul>
        <div>
          {isLogin ? (
            <div className="flex justify-center items-center gap-2">
              <div className="h-6 w-6 bg-white rounded-full overflow-hidden">
                <img src={profile} className="h-full w-full object-cover" />{" "}
              </div>{" "}
              Subin
            </div>
          ) : (
            <Link to="/signin" className="text-orange-400 cursor-pointer">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

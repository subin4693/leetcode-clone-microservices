import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-slate-200 flex ">
      <div>
        <Navbar />
        <section className="flex justify-center">
          <main className="w-[95vw] lg:w-[70%] ">
            <Outlet />
          </main>
        </section>
      </div>
    </div>
  );
};

export default Layout;

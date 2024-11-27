import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../apicalls";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await signin({ email, password });
      if (res.success) {
        navigate("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wront please try again");
    }
  };

  return (
    <div className="flex justify-center items-center  flex-col h-screen bg-stone-900 ">
      <h1 className="text-xl font-bold text-slate-100">Signin</h1>
      <br />
      <form
        className="flex flex-col w-full  max-w-[500px] gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-md outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded-md outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-orange-500 p-2 rounded-md text-stone-100 hover:bg-orange-600 duration-100 hover:shadow-sm">
          Signin
        </button>
        <Link to="/signup" className="text-stone-100">
          Don't have an account
        </Link>
      </form>
    </div>
  );
};

export default Signin;

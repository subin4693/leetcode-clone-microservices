import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../apicalls";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!name.trim()) {
        return alert("Enter valid name");
      }

      if (!password === confirmPassword) {
        return alert("Password not match");
      }

      const res = await signup({ email, password, name });

      if (res.success) {
        navigate("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center  flex-col h-screen bg-stone-900  ">
      {" "}
      <h1 className="text-xl font-bold text-stone-100">Signup</h1>
      <br />
      <form className="flex flex-col w-[500px] gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded-md outline-none"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 border rounded-md outline-none"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="bg-orange-500 p-2 rounded-md text-slate-100 hover:bg-orange-600 duration-100 hover:shadow-sm">
          Signin
        </button>
        <Link to="/signin" className="text-stone-100">
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;

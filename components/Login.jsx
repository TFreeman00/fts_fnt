import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../api/authApi";

export default function Login() {
  const navigate = useNavigate();
  const [login] = useLoginUserMutation();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await login(form);
    if (result.error) {
      alert("Invalid login credentials");
      navigate("/auth/login");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div>
      <div
        className="max-w-md w-full mx-4 md:mx-auto p-8 bg-white shadow-md rounded-lg"
        style={{ opacity: 0.9 }}
      >
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="flex flex-col">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onChange}
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </label>
          <label className="flex flex-col">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              onKeyDown={handleKeyDown}
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </label>
          <div className="mt-8 flex flex-col items-center justify-center h-full">
            <button
              type="submit"
              className="text-black hover:text-gray-300 bg-gray hover:bg-blue-700 duration-300 rounded-md px-4 py-2 border"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

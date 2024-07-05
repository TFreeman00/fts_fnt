import React, { useState } from "react";
import { useRegisterUserMutation } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [addNewUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (form.username.length < 5) {
    //   alert("Username must contain at least 5 characters. Please try again.");
    //   return false;
    // }

    // if (form.password.length < 8) {
    //   alert("Password must contain at least 8 characters. Please try again.");
    //   return false;
    // }

    if (form.confirmPassword !== form.password) {
      alert("Password do not match. Please try again.");
      return false;
    }

    const results = addNewUser(form);
    navigate("/auth/me");
  };

  return (
    // <div
    //   style={{
    //     backgroundImage: `url('https://i.pinimg.com/originals/43/22/82/432282534bba11b6e9f48690462ccf7b.jpg')`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     minHeight: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <div>
      <div
        className="max-w-md w-full mx-4 md:mx-auto p-8 bg-white shadow-md rounded-lg"
        style={{ opacity: 0.9 }}
      >
        <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="flex flex-col">
            First Name:
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={onChange}
              // required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="flex flex-col">
            Last Name:
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={onChange}
              // required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="flex flex-col">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onChange}
              required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="flex flex-col">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="flex flex-col">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="flex flex-col">
            Confirm your password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={onChange}
              required
              className="border border-gray-300 rounded-md p-2"
            />
          </label>
          <div className="mt-8 flex flex-col items-center justify-center h-full">
            <button
              type="submit"
              className="text-black hover:text-gray-300 bg-gray hover:bg-blue-700 duration-300 rounded-md px-4 py-2 border"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

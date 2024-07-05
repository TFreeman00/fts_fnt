import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import { setToken } from "../slice/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [theme, setTheme] = useState("light");

useEffect(() => {
  document.body.className = theme;
}, [theme]);

 const toggleTheme = () => {
   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
 };

  // const token = useSelector((state) => state.auth.token);

  // useEffect(() => {
  //   // Example useEffect, adjust according to your needs
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  return (
    <nav className="flex justify-between items-center h-12 px-4 shadow-md">
      <Link to="/" className="text-xl font-bold">
        Home
      </Link>
      <div>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/register" className="mr-4">
          Register
        </Link>
        <Link to="/admin" className="mr-4">
          Admin Dashboard
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-4 py-2 px-3 bg-slate-200 dark:bg-slate-900 text-black dark:text-white rounded"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

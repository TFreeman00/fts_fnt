import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetUserInfoQuery } from "../api/authApi";
import HomePage from "../components/Homepage";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import AdminDashboard from "../components/AdminDashboard.jsx";
import Footer from "../components/Footer";
import Terms from "../components/Terms";

export default function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

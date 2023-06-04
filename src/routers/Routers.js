import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RgisterPage"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="RegisterPage" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
     
    </Routes>
  );
};

export default Routers;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
// import RiderLogin from "../pages/RiderLoginPage.jsx"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/riderlogin" element={<RiderLogin />} /> */}
      <Route path="*" element={<NotFound />} />
     
    </Routes>
  );
};

export default Routers;

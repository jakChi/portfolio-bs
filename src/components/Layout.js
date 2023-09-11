import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ mobile }) => {
  return (
    <div className="App">
      <Navbar title={"JakChi"} mobile={mobile} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

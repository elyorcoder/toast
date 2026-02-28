import React from "react";
import "../../App.css";
import { Outlet } from "react-router-dom";
import Sidbar from "./Sidbar";
import Navbar from "./Navbar";

const Dash = () => {
  return (
    <div className="d1">
      <Sidbar />
      <div className="d2">
        <Navbar />
        <div className="d3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dash;

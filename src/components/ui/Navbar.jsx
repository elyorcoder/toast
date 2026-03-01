import React from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()?.pathname;
  return <div className="n1">
   {location === "/carts" ? (
        <h2 className="n2">Shop Home page</h2>
      ) : (
        <h2 className="n2">Admin</h2>
      )
    } 
  </div>;
};

export default Navbar;

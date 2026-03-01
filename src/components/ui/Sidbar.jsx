import React from "react";
import "../../App.css";
import { NavLink, useNavigate } from "react-router-dom";


const Sidbar = () => {
  const navigate = useNavigate();

  return (
    <div className="s1">
      <ul className="s2">
        <li>
          <NavLink className="s3" to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/carts">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="s3" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
      <button
        className="s4"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Sidbar;

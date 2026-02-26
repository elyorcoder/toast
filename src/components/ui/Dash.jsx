import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="hh">Welcome to Dashboard</h1>
      <button
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

export default Dash;

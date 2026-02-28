import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Log from "../components/ui/Log";
import Dash from "../components/ui/Dash";
import Carts from "../components/ui/Carts";
import Products from "../components/ui/Products";
import Settings from "../components/ui/Settings";
import Users from "../components/ui/Users";
const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } 
  }, [token, navigate]);
  return (
    <Routes>
      {token ? (
        <Route path="/" element={<Dash />}>
          <Route path="/users" element={<Users />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/products" element={< Products/>} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/login" element={<Log />} />
      )}
    </Routes>
  );
};

export default Router;

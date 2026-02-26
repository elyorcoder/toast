import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Log from "../components/ui/Log";
import Dash from "../components/ui/Dash";
const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(
    () => {
      if (token) {
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
    },
    [ token, navigate ]);
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      <Route
        path="/Dashboard"
        element={token ? <Dash /> : <Log />}
      />
    </Routes>
  );
};

export default Router;

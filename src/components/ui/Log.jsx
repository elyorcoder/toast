import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
const Log = () => {
  const api = "https://fakestoreapi.com/auth/login";
  const navigate = useNavigate();
  const [username, setDUsername] = useState("donero");
  const [password, setPassword] = useState("ewedon");
  const [load, setload] = useState(false);
  const handle = (e) => {
    setDUsername(e.target.value.trim());
  };
  const handleP = (e) => {
    setPassword(e.target.value.trim());
  };
  const handleSub = (e) => {
    e.preventDefault();
    setload(true);
    axios
      .post(api, user)
      .then((data) => {
        if (data?.status >= 200 && data?.status <= 300) {
          setload(false);
          toast.success("Login success");
          localStorage.setItem("token", data?.data?.token);
          navigate("/");
          //   localStorage.setItem("refreshToken", data?.data?.refreshToken);
        }
      })
      .catch((error) => {
        toast.error("Invalid Login");
        console.log(error);
        setload(false);
      });
  };
  const user = {
    username: username,
    password: password,
  };
  return (
    <div>
      <form className="div" onSubmit={handleSub}>
        <input
          type="text"
          className="search"
          placeholder="Write some text"
          value={username}
          onChange={handle}
        />
        <input
          type="search"
          className="text"
          placeholder="Write some text"
          value={password}
          onChange={handleP}
        />
        <button disabled={load} type="submit">
          {load ? "Yuborilmoqda . . ." : "Yuborish"}
        </button>
      </form>
    </div>
  );
};

export default Log;

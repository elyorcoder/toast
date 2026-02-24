import { useState } from "react";
import axios from "axios";
import "./App.css";
import { toast } from "react-toastify";

function App() {
  const api = "https://dummyjson.com/auth/login";
  const [username, setDUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [load, setload] = useState(false);
  const [res, setRes] = useState({});
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
        if (data?.status === 200) {
          setload(false);
          toast.success("Login success");
          setRes(data?.data);

          localStorage.setItem("accessToken", data?.data?.accessToken);
          localStorage.setItem("refreshToken", data?.data?.refreshToken);
        }
      })
      .catch((error) => {
        toast.error("Invalid Login");
        console.log(error);
      });
  };
  const user = {
    username: username,
    password: password,
    expiresIMins: 30,
  };
  const {
    email,
    username: responseusername,
    image,
    firstName,
    lastName,
  } = res;
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
      <div>
        <div className="cards">
          {res?.id ? (
            <div className="card">
              <img width="120" src={image} alt="" />
              <div className="mini">
                <h2 className="p2">User-name: {responseusername}</h2>
                <p className="p">{firstName}</p>
                <p className="p">{lastName}</p>
                <p className="p"> {email}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default App;

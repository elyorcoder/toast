import { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { RiComputerFill } from "@remixicon/react";
import { RiDiamondFill } from "@remixicon/react";
import { RiMenFill } from "@remixicon/react";
import { RiWomenFill } from "@remixicon/react";
const Carts = () => {
  const [time, setTime] = useState(599);
  const [filter, setFilter] = useState([]);
  const [shop, setShop] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setShop(data?.data);
      setFilter(data?.data);
    });
  }, []);
  console.log(shop);
  const finder = () => {
    setFilter(
      shop.map((item, index) => (item.category[0] === "m" ? item : null)),
    );
  };
  useEffect(() => {
    if (time <= 0) return;
    const soat = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(soat);
    };
  }, [time]);
  const finder2 = () => {
    setFilter(
      shop.map((item, index) => (item.category[0] === "j" ? item : null)),
    );
  };
  const finder3 = () => {
    setFilter(
      shop.map((item, index) => (item.category[0] === "e" ? item : null)),
    );
  };
  const finder4 = () => {
    setFilter(
      shop.map((item, index) => (item.category[0] === "w" ? item : null)),
    );
  };
  function tayyor(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m} : ${s}`;
  }
  return (
    <div className="shop">
      <div className="block" style={{}}>
        <div className="intro-content">
          <h1 className="shoph">New Laptop</h1>
          <p className="shopp">Lorem ipsum dolor sit amet consectetur.</p>
          <button className="button">Shop now</button>
        </div>
      </div>
      <h1 className="katalogh">Kataloglar</h1>
      <div className="katalog">
        <button onClick={finder} className="katalog-mini">
          <RiMenFill color="rgba(255,255,255,1)" size="80" />
          men's clothing
        </button>
        <button onClick={finder2} className="katalog-mini">
          <RiDiamondFill color="rgba(255,255,255,1)" size="80" />
          jewelery
        </button>
        <button onClick={finder3} className="katalog-mini">
          <RiComputerFill color="rgba(255,255,255,1)" size="80" />
          electronics
        </button>
        <button onClick={finder4} className="katalog-mini">
          <RiWomenFill color="rgba(255,255,255,1)" size="80" />
          women's clothing
        </button>
      </div>
      <div className="mahsulotlar">
        <h1 className="katalogh">Mahsulotlarimiz</h1>
        <div className="flex">
          {filter.map((item, index) =>
            item ? (
              <div className="mahsulotlar-div" key={item.id}>
                <img width={80} src={item.image} alt={item.title} />
                <h3 className="mahsulotlar-h">{item.title}</h3>
                <p className="mahsulotlar-p">{item.price}$</p>
              </div>
            ) : null,
          )}
        </div>
      </div>
      <div className="chegirma">
        <h1 className="katalogh">Chegirmalar</h1>
        <h2 className="katalogh">Vakti {tayyor(time)}</h2>
        <div className="flex">
          {filter.map((item, index) =>
            item ? (
              <div className="mahsulotlar-div" key={item.id}>
                <img width={80} src={item.image} alt={item.title} />
                <h3 className="mahsulotlar-h">{item.title}</h3>
                <p className="mahsulotlar-p">{item.price - 1.5}$</p>
              </div>
            ) : null,
          )}
        </div>
      </div>
      <div className="barcha">
        <h1 className="katalogh">Barcha-Mahsulotlar</h1>
        <div className="flex">
          {shop.map((item, index) => (
            <div className="mahsulotlar-div" key={item.id}>
              <img width={80} src={item.image} alt={item.title} />
              <h3 className="mahsulotlar-h">{item.title}</h3>
              <p className="mahsulotlar-p">{item.price - 1.5}$</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <h1 className="katalogh">Made by Elyor</h1>
      </div>
    </div>
  );
};

export default Carts;

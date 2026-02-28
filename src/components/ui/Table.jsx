import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const Table = ({ products, users }) => {
  const location = useLocation()?.pathname;
  return (
    <div className="t1">
      <table className="t2">
        <thead>
          {location === "/products" ? (
            <tr>
              <td>Id</td>
              <td>Image</td>
              <td>Price</td>
              <td>Category</td>
              <td>Descriptions</td>
              <td>Title</td>
              <td>Actions</td>
            </tr>
          ) : (
            <tr>
              <td>t/r</td>
              <td>Username</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          )}
        </thead>
        <tbody>
          {location === "/products"
            ? products.length
              ? products.map(
                  (
                    { title, category, description, image, id, price },
                    index,
                  ) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>
                        <img width={80} src={image} alt={title} />
                      </td>
                      <td>{price}$</td>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>{title}</td>
                      <td className="td">
                        <button className="t3">view</button>
                        <button className="t3">edit</button>
                        <button className="t3">delete</button>
                      </td>
                    </tr>
                  ),
                )
              : null
            : users.length
              ? users.map(({ id, username, email }, index) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td className="td">
                      <button className="t3">view</button>
                      <button className="t3">edit</button>
                      <button className="t3">delete</button>
                    </td>
                  </tr>
                ))
              : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

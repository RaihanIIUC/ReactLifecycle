import React, { Component, useEffect, useState } from "react";
import Loader from "./image-use";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const CartList = (props) => {

  const[loader,setLoader] = useState(true);


  useEffect(() => {
    setInterval({...loader, setLoader : false },2000);
  },[loader]);

 
  return (
    <>
{props.cartList.map((cart, index) =>
      (
     
        <div
          style={{
            marginBottom: "10px",
            border: "10px solid green",
            borderRadius: "40px",
            backgroundColor: "yellowgreen",
          }}

        >
          <Link to={`/products/${index}`}>
            <p>Cart's Name : {cart.name}</p>
            <p>Cart's Description : {cart.Description}</p>
            <p>Cart's Price : {cart.Price}</p>
            <p>Cart's category : {cart.Category}</p>

          </Link>

        </div>
      )
      )}

    </>
  );
}

export default CartList;
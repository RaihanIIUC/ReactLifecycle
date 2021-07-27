import React, { Component, useEffect, useState } from "react";
import Loader from "./image-use";

const CartList = (props) => {
    
  const[loader,setLoader] = useState(true);


  useEffect(() => {
    setInterval({...loader, setLoader : false },4000);
  },[loader]);
        return  ( 
          <> 
          { props.cartList.map((cart) => 
            (
                <div
                  style={{
                    marginBottom: "10px",
                    border: "10px solid green",
                    borderRadius: "40px",
                    backgroundColor: "yellowgreen",
                  }}
                  onClick={() =>  props.selectCart(cart)}
                > 
                  <p>Cart's Name : {cart.name}</p>
                  <p>Cart's Description : {cart.Description}</p>
                  <p>Cart's Price : {cart.Price}</p>
                  <p>Cart's category : {cart.Category}</p>
                </div>
              )
          )}

          </>
        );
        }

export default  CartList;
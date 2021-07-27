import React, { Component } from "react";
import { useEffect,useState } from "react";
import Loader from "./image-use";




 const CartDetails = (props) => {


  const[loader,setLoader] = useState(true);

  useEffect(()=> {
    setTimeout(()=>{
      setLoader(false);
    },4000);
  },[loader]);
 
            return (
             <>
             
             {
               (loader) ? <Loader/> :
                <div
                style={{
                  marginBottom: "10px",
                  border: "10px solid green",
                  borderRadius: "40px",
                  backgroundColor: "yellowgreen",
                }}
                onClick={props.diselectCart}
               >
                <p>Cart's Name : {props.cart.currentCart.name}</p>
                <p>Cart's Price : {props.cart.currentCart.Price}</p>
                <button onClick={props.diselectCart}>
                  Back to button
                </button>
              </div>
             }
             </>
            );
    }
 

export default CartDetails;

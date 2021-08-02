import React, { Component } from "react";
import { useEffect, useState } from "react";
import Loader from "./image-use";
import { useHistory } from 'react-router';

import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';


const CartDetails = (props) => {

 
  const [loader, setLoader] = useState(true);
  const params = useParams();


  useEffect(() => {
    setTimeout(() => {
      setLoader(false);

    }, 2000);
  }, [loader]);


//  <Route exact path="/products/:id" render={({match}) => (
//   <CartDetails cartList={props.cartList.find(p => p.id === match.params.id)} />
// )} />

  return (
    <>
      {
        (loader) ? <Loader/> :
        <div
        onClick={props.diselectCart}

      >
    
        <h1>Id no : {props.cartList[params.id].name}</h1>
        <h1>Id no : {props.cartList[params.id].Category}</h1>
        <h1>Id no : {props.cartList[params.id].Description}</h1>
      </div>

      }
     
    </>
  );

}


export default CartDetails;

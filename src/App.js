import { Component, useEffect, useState } from "react";
 import "./App.css";
import CartDetail from "./components/cart_detail";
import CartList from "./components/cart_page";
import Loader from "./components/image-use";
import { useHistory } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  const [cartList, setcartList] = useState([
    {
      name: "Mouse",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      Price: 200,
      Category: "Computer Helps",
      show: true,
    },
    {
      name: "Keyboard",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      Price: 300,
      Category: "computer helps",
      show: true,
    },
    {
      name: "USb",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      Price: 300,
      Category: "compueter storage",
      show: true,
    },
  ]);

  const [loader, setLoader] = useState(true);
  const history = useHistory();

  const diselectCart = () => {
    history.push("/");
  };

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, [loader]);

  return (
    <>
      {
        loader ? <Loader/> : 
        (
          <Switch>
        <Route exact path="/">
          <CartList cartList={cartList} />
        </Route>
        <Route exact path="/products/:id">
          <CartDetail cartList={cartList} diselectCart={diselectCart} />
        </Route>
      </Switch>
        )
      }
    </>
  );
};

export default App;

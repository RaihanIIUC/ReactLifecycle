import { Component, useEffect, useState  } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import './App.css';
import CartDetail from './components/cart_detail';
import CartList from './components/cart_page';
import Loader from './components/image-use';
 
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

    const[currentCart,setcurrentCart] = useState(null);
    const[loader,setLoader] = useState(true);


 const selectCart = (data) => {
 
   setcurrentCart({ ...currentCart, currentCart : data });
          
  };

 const diselectCart = () => {
    setcurrentCart( null )};
 
    useEffect(() => {
      setInterval(()=>{
        setLoader(false);
      },2000);
    },[loader]);



 return (
    <>
{
  loader ? <Loader/> : 
  (
      currentCart  ? (
       <CartDetail
          cart={currentCart}
         diselectCart={diselectCart}
       />
     ) : (
       <CartList cartList={cartList} selectCart={selectCart} />
     )
 )
}
 </>
 )

    }
    

export default App;


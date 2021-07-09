import { findAllByDisplayValue } from '@testing-library/react';
import React,{useState} from 'react'
import Detail from './Details'
import Page from './ProductPage'

const Product = () => {

    const [product, setProduct] = useState([
        {
            name: "Mouse",
            description: "Electronic",
            price: 200,
            category: "Computer Helps",
            show: true,
        },
        {
            name: "Keyboard",
            description: "it is a pen of programmer",
            price: 300,
            category: "computer helps",
            show: true,
        },
        {
            name: "USb",
            description: "storage devices",
            price: 300,
            category: "compueter storage",
            show: true,
        },
    ]);

     
    //   const toggle = () => setProduct((show) => [...show, false]);
 
    const [detail,setDetail] = useState([]);

    const [buttons,setButtons] = useState(true);
     

        return (
          <>
            <ul>
              {product
                .filter((product) => product.show === true)
                .map((product) => (
                  <Detail
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                     show={product.show}
                  />
                ))}
            </ul>
          </>
        );

    }

export default Product
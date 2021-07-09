import React, { Component } from "react";


class CartList extends Component {
    render() {
        return (
          <div style={{
          padding: '100px',
         }}> 
            {this.props.cartList.map((cart) => {
              return (
                <div
                  style={{
                    marginBottom: "10px",
                    border: "10px solid green",
                    borderRadius: "40px",
                    backgroundColor: "yellowgreen",
                  }}
                  onClick={() => this.props.selectCart(cart)}
                > 
                  <p>Cart's Name : {cart.name}</p>
                  <p>Cart's Description : {cart.Description}</p>
                  <p>Cart's Price : {cart.Price}</p>
                  <p>Cart's category : {cart.Category}</p>
                </div>
              );
          })}
        </div>        
     );
    }
}


export default  CartList;
import React, { Component } from "react";

class CartDetails extends Component {
    render() {
            return (
              <div
                style={{
                  marginBottom: "10px",
                  border: "10px solid green",
                  borderRadius: "40px",
                  backgroundColor: "yellowgreen",
                }}
                onClick={this.props.diselectCart}
              >
                <p>Cart's Name : {this.props.currentCart.name}</p>
                <p>Cart's Price : {this.props.currentCart.price}</p>
                <button onClick={this.props.diselectCart}>
                  Back to button
                </button>
              </div>
            );
    }
}

export default CartDetails;

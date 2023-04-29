import React, { useContext } from "react";
import { Container } from "reactstrap";
import { CartContext } from "../../App.js";
import shirts from "../../shared/shirts";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const myCart = useContext(CartContext);

  return (
    <Container>
      <h1>ShoppingCart</h1>
      {myCart.cart.map((item, idx) => {
        return (
          <div key={idx}>
            <p>{shirts[item.id].name}</p>
            <p>{item.quantity}</p>
            <p>{item.color}</p>
            <p>{item.sSize}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default ShoppingCart;

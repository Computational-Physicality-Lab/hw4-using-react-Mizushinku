import React, { useContext } from "react";
import { Button, Container } from "reactstrap";
import { CartContext } from "../../App.js";
import CartItem from "./CartItem.js";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import shirts from "../../shared/shirts.js";

import "./ShoppingCart.css";

const ShoppingCart = () => {
  const myCart = useContext(CartContext);

  let subTotal =
    Math.round(
      myCart.cart
        .map((item) => {
          return {
            p: parseFloat(shirts[item.id].price.slice(1)),
            q: parseInt(item.quantity, 10),
          };
        })
        .reduce((acc, i) => acc + i.p * i.q, 0.0) * 100
    ) / 100;
  const shippingCost = 6.95;
  let totalCost = Math.round((subTotal + shippingCost) * 100) / 100;

  return (
    <Container className="mb-5">
      <h1 className="mt-3 mb-5">
        My Cart (
        {myCart.cart.map((item) => item.quantity).reduce((n, q) => n + q, 0)})
      </h1>
      <Container className="d-flex p-0 ">
        <Container className="d-flex flex-column p-0">
          {myCart.cart.length === 0 ? (
            <h2 className="my-5">Your Cart is Empty</h2>
          ) : (
            myCart.cart.map((item, idx) => {
              return (
                <div key={idx}>
                  <CartItem item={item} idx={idx} />
                </div>
              );
            })
          )}
        </Container>
        <Container className="d-flex flex-column w-75 ms-5 mb-3">
          <div id="order-summary">
            <h3 className="fw-bold ms-3 mt-3 mb-4">Order Summary</h3>
            <div className="d-flex justify-content-between mx-3 fs-5">
              <span>Subtotal:</span>
              <span style={{ color: "#c51230" }}>{`$${subTotal}`}</span>
            </div>
            <div className="d-flex justify-content-between mx-3 fs-5">
              <span>Est. Shipping:</span>
              <span style={{ color: "#c51230" }}>{`$${shippingCost}`}</span>
            </div>
            <div className="d-flex justify-content-between mx-3 my-2 fs-3">
              <span>Total:</span>
              <span id="total-price" className="ps-4 pt-1">
                {`$${totalCost}`}
              </span>
            </div>
            <div className="d-flex justify-content-center mx-3 my-2">
              <Button
                tag={Link}
                to={appRoutes.notImp}
                id="btn_checkout"
                className="py-2 px-3"
              >
                Sign in and Chackout
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button
              tag={Link}
              to={appRoutes.products}
              id="btn_contiuneShopping"
              className="py-2 px-3"
            >
              Continue Shopping
            </Button>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default ShoppingCart;

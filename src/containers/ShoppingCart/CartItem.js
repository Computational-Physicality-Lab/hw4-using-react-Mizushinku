import React, { useContext } from "react";
import { Button, Container, Input } from "reactstrap";
import shirts from "../../shared/shirts";
import { CartContext } from "../../App.js";
import "./CartItem.css";

const CartItem = (props) => {
  const myCart = useContext(CartContext);
  const item = props.item;

  const adjustQuantity = (q) => {
    const idx = props.idx;
    const newCart = [...myCart.cart];
    newCart[idx].quantity = q;
    myCart.setCart(() => newCart);
  };

  const removeItem = () => {
    const idx = props.idx;
    const newCart = [...myCart.cart];
    newCart.splice(idx, 1);
    myCart.setCart(() => newCart);
  };

  return (
    <div className="cart-item mb-3">
      <h3 className="mt-4">{shirts[item.id].name}</h3>
      <div className="d-flex mt-3">
        <img
          src={
            item.color
              ? shirts[item.id].colors[item.color].front
              : shirts[item.id].default.front
          }
          alt="shirt"
        />
        <Container className="d-flex flex-column">
          <Container className="d-flex align-items-center">
            <span>Quantity: </span>
            <Input
              type="select"
              className="select-quantity ms-3"
              onChange={(e) => {
                adjustQuantity(parseInt(e.target.value, 10));
              }}
              value={item.quantity}
            >
              {[...Array(20).keys()].map((q) => {
                return (
                  <option key={q} value={q + 1}>
                    {q + 1}
                  </option>
                );
              })}
            </Input>
          </Container>
          <Container className="d-flex align-items-center mt-2">
            <span>Color:</span>
            <span className="ms-2" style={{ color: "#c51230" }}>
              {item.color ? item.color : "default"}
            </span>
          </Container>
          <Container className="d-flex align-items-center mt-2">
            <span>Size:</span>
            <span className="ms-2" style={{ color: "#c51230" }}>
              {item.sSize}
            </span>
          </Container>
          <Container className="d-flex align-items-center mt-2">
            <span>Price:</span>
            <span className="ms-2" style={{ color: "#c51230" }}>
              {shirts[item.id].price}
            </span>
          </Container>
          <Container className="mt-2">
            <Button id="btn_rm" onClick={() => removeItem()}>
              Remove
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default CartItem;

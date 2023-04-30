import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Input } from "reactstrap";

import shirts from "../../shared/shirts";
import appRoutes from "../../shared/appRoutes";
import { CartContext } from "../../App.js";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();

  const myCart = useContext(CartContext);

  const shirt = shirts[id];
  const colors = shirt.colors;
  const colorNames = Object.keys(colors);
  const [color, setColor] = useState(colorNames.length ? colorNames[0] : "");
  const [side, setSide] = useState("front");
  const [quantity, setQuantity] = useState(1);
  const [sSize, setSSize] = useState("Size:");

  const addToCart = () => {
    myCart.setCart((prev) => {
      // prev.unshift();
      prev = [
        { id: id, quantity: quantity, color: color, sSize: sSize },
        ...prev,
      ];
      return prev;
    });
  };

  return (
    <Container className="my-3">
      <h1>{shirt.name}</h1>
      <Container className="d-flex flex-column my-5 flex-md-row">
        <img
          src={color ? colors[color][side] : shirt.default[side]}
          alt="shirt img"
        />
        <Container className="ms-3">
          <h4 style={{ color: "#c51230", fontSize: "3rem" }}>
            {shirt.price ? shirt.price : "No Data"}
          </h4>
          <p style={{ fontSize: "1.2rem" }} className="my-3">
            {shirt.description ? shirt.description : "No Data"}
          </p>
          <Container fluid className="d-flex flex-column p-0 my-3">
            <Container fluid className="d-flex align-items-center">
              <p className="m-0">Side: </p>
              <div>
                {["front", "back"].map((s) => {
                  return (
                    <Button
                      key={s}
                      className="ms-3 my- btn-side"
                      onClick={() => {
                        setSide(s);
                      }}
                    >
                      {s}
                    </Button>
                  );
                })}
              </div>
            </Container>
            <Container fluid className="d-flex align-items-center mt-3">
              <p className="m-0">Color: </p>
              <div>
                {colorNames.map((c) => {
                  return (
                    <Button
                      key={c}
                      className="ms-3 my-1 btn-color"
                      onClick={() => {
                        setColor(c);
                      }}
                      style={{ backgroundColor: c, color: "black" }}
                    >
                      {c}
                    </Button>
                  );
                })}
              </div>
            </Container>
            <Container fluid className="d-flex align-items-center mt-3">
              <p className="m-0">Quantity: </p>
              <Input
                type="select"
                className="select-quantity ms-3"
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value, 10));
                }}
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
            <Container fluid className="d-flex align-items-center mt-3">
              <p className="m-0">Size: </p>
              <Input
                type="select"
                className="select-size ms-3"
                onChange={(e) => {
                  setSSize(e.target.value);
                }}
              >
                {sizeList.map((s) => {
                  return (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  );
                })}
              </Input>
            </Container>
            <Button
              tag={Link}
              to={appRoutes.shoppingCart}
              disabled={!(shirt.price && sSize !== "Size:")}
              className="btn_toCart mt-5 py-2"
              onClick={() => addToCart()}
            >
              Add to Cart
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

const sizeList = [
  "Size:",
  "Women’s XS",
  "Women’s S",
  "Women’s M",
  "Women’s L",
  "Women’s XL",
  "Women’s 2XL",
  "Men’s XS",
  "Men’s S",
  "Men’s M",
  "Men’s L",
  "Men’s XL",
  "Men’s 2XL",
];

export default Detail;

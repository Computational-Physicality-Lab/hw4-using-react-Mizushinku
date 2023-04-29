import React from "react";
import appRoutes from "../../shared/appRoutes";
import shirts from "../../shared/shirts";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <h1 id="product-top-text">Our T-Shirts</h1>
      <Container className="mb-5">
        <Row sm="1" md="2" lg="3">
          {shirts.map((shirt, idx) => {
            return (
              <Col key={idx}>
                <Container className="my-3 pb-2 product-info-container">
                  <Link to={`${appRoutes.product_deatil}/${idx}`}>
                    <img
                      src={getShowingImg(shirt)}
                      alt="shirt"
                      style={{ width: "100%" }}
                    />
                  </Link>
                  <h3>{shirt.name}</h3>
                  <p>Available in {Object.keys(shirt.colors).length} colors</p>
                  <div className="text-center">
                    <Button
                      tag={Link}
                      to={`${appRoutes.product_deatil}/${idx}`}
                    >
                      See Page
                    </Button>
                  </div>
                </Container>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

function getShowingImg(info) {
  const n_color = info.colors ? Object.keys(info.colors).length : 0;
  const colors = n_color ? info.colors : info.default;

  let show_pic = undefined;
  if (n_color) {
    for (const c in colors) {
      show_pic = colors[c].front ? colors[c].front : undefined;
      if (show_pic) break;
      show_pic = colors[c].back ? colors[c].back : undefined;
      if (show_pic) break;
    }
  } else {
    //default color
    show_pic = colors ? colors.front : "";
  }

  return show_pic;
}

export default Products;

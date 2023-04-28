import React from "react";

import Scotty from "../../assets/images/scotty.png";
import { Container } from "reactstrap";

const NotImplement = () => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <img src={Scotty} alt="Scotty" style={{ opacity: 0.5 }} />
    </Container>
  );
};

export default NotImplement;

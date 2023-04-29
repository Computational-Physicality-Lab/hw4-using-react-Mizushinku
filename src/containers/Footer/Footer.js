import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import appRoutes from "../../shared/appRoutes";
import "./Footer.css";

const Footer = () => {
  return (
    <Container
      fluid
      className="d-flex px-5 py-5 justify-content-around align-items-center footer"
    >
      <Link className="footer-link" to={appRoutes.notImp}>
        Contact Us
      </Link>
      <Link className="footer-link" to={appRoutes.notImp}>
        Site Map
      </Link>
      <Link className="footer-link" to={appRoutes.notImp}>
        Privacy Policy
      </Link>
      <Link className="footer-link" to={appRoutes.notImp}>
        Careers
      </Link>
      <Link className="footer-link" to={appRoutes.notImp}>
        Reviews
      </Link>
      <p style={{ margin: 0, color: "white" }}>Designed by iSurtr</p>
    </Container>
  );
};

export default Footer;

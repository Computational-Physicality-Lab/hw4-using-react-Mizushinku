import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="top-color-fill" />
      <Navbar>
        <NavbarBrand tag={RouterNavLink} to={appRoutes.home}>
          <img src={Logo} style={{ height: "80px" }} />
        </NavbarBrand>
        <NavbarText>Text</NavbarText>
      </Navbar>
    </div>
  );
};

export default NavBar;

import React, { useContext } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import { CartContext } from "../../App.js";
import "./NavBar.css";

const NavBar = () => {
  const myCart = useContext(CartContext);

  return (
    <div>
      <div className="top-color-fill" />
      <Navbar>
        <NavbarBrand tag={RouterNavLink} to={appRoutes.home}>
          <img src={Logo} style={{ height: "100px" }} alt="Logo" />
        </NavbarBrand>
        <NavbarText style={{ fontSize: "3rem", color: "black" }}>
          Scotty Shirts U Illustrate (SSUI)
        </NavbarText>
        <NavLink
          tag={RouterNavLink}
          to={appRoutes.shoppingCart}
          className="d-flex flex-row align-items-center cart-link"
        >
          <img src={Cart} style={{ height: "60px" }} alt="Cart" />
          <p id="cart-count" className="mx-2">
            {myCart.cart
              .map((item) => item.quantity)
              .reduce((n, q) => n + q, 0)}
          </p>
        </NavLink>
      </Navbar>
      <Nav className="d-flex justify-content-around ">
        <NavItem>
          <NavLink tag={RouterNavLink} to={appRoutes.products}>
            T-SHIRTS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to={appRoutes.notImp}>
            CREATE FROM PICTURE
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to={appRoutes.notImp}>
            CREATE YOUR OWN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to={appRoutes.notImp}>
            ABOUT US
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to={appRoutes.notImp}>
            LOG IN
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;

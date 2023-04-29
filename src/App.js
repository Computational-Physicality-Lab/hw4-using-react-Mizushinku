import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import Products from "./containers/Products/Products";
import Detail from "./containers/Detail/Detail";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import NotImplement from "./containers/NotImplement/NotImplement";
import Footer from "./containers/Footer/Footer";
import "./App.css";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
        <NavBar />
      </CartContext.Provider>
      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={appRoutes.products} element={<Products />} />
        <Route
          path={appRoutes.detail}
          element={
            <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
              <Detail />
            </CartContext.Provider>
          }
        />
        <Route
          path={appRoutes.shoppingCart}
          element={
            <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
              <ShoppingCart />
            </CartContext.Provider>
          }
        />
        <Route path={appRoutes.notImp} element={<NotImplement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

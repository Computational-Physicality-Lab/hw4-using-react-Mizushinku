import { Routes, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import Products from "./containers/Products/Products";
import Detail from "./containers/Detail/Detail";
import NotImplement from "./containers/NotImplement/NotImplement";
import Footer from "./containers/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={appRoutes.products} element={<Products />} />
        <Route path={appRoutes.detail} element={<Detail />} />
        <Route path={appRoutes.notImp} element={<NotImplement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

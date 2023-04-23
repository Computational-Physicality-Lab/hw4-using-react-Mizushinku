import { Routes, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path={appRoutes.home} />
      </Routes>
    </div>
  );
}

export default App;

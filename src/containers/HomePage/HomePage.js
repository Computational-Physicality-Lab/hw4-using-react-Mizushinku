import React from "react";
import Banner from "../../assets/images/banner.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <img src={Banner} style={{ width: "100%" }} alt="banner" />
    </div>
  );
};
export default HomePage;

import React from "react";
import Banner from "../../assets/images/banner.png";
import "./HomePage.css";
import { Container } from "reactstrap";

const HomePage = () => {
  return (
    <div>
      <img src={Banner} style={{ width: "100%" }} alt="banner" />
      <Container fluid className="d-flex justify-content-center">
        <div className="text-frag">
          <h2 className="text-frag-title">破道の九十　黒棺</h2>
          <p className="text-frag-content">
            滲み出す混濁の紋章　不遜なる狂気の器
            <br />
            湧き上がり・否定し・痺れ・瞬き　眠りを妨げる
            <br />
            爬行する鉄の王女　絶えず自壊する泥の人形
            <br />
            結合せよ　反発せよ　地に満ち己の無力を知れ
          </p>
        </div>
        <div className="text-frag">
          <h2 className="text-frag-title">インディグネイション</h2>
          <p className="text-frag-content">
            天光満る処に我は在り、
            <br />
            黄泉の門開く処に汝在り、
            <br />
            出でよ神の雷、
            <br />
            これで終わりです、
            <br />
            インディグネイション！
          </p>
        </div>
      </Container>
    </div>
  );
};
export default HomePage;

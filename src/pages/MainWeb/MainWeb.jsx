import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import "../../index.css";
import Header1 from "./Header1/Header1";
import Header2 from "./Header2/Header2";
import Header3 from "./Header3/Header3";
import Header4 from "./Header4/Header4";
import JoinPresale from "./JoinPresale/JoinPresale";
import SemiFooter from "./SemiFooter/SemiFooter";
import Xprotocol from "./Xprotocol/Xprotocol";
import Footer from "./Footer/Footer";
import imgurl from "../../assets/myAssets/blood.png";

const MainWeb = () => {
  return (
    <div className="m">
      <div className="main">
        <div>
          <Navigation />
          <Header />
          <Header1 />
          <Header2 />
          <Header3 />
          <Header4 />
          <JoinPresale />
          <SemiFooter />
          <Xprotocol />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainWeb;

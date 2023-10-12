import React from "react";

import img from "../../../assets/myAssets/logo-no-background.png";

const Footer = () => {
  return (
    <footer className="sectionf">
      <div className="relative">
        {/* <img src={img} alt="Bottom logo" className="w-full h-20" /> */}
        <a className="absolute bottom-10 m-auto left-0 right-0 w-full text-black font-semibold">
          Copyright &copy; 2023 EPSILON X - All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;

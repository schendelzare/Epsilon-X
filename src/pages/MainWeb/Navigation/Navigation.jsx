import React, { useRef, useState } from "react";
import { useIsVisible } from "../useVisible";
import logo from "../../../assets/myAssets/epsilon2.png";
import { IoMdArrowDropdownCircle, IoMdArrowDropdown } from "react-icons/Io";

import { Link } from "react-scroll";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      ref={ref1}
      className={`navs ${isVisible1 ? "animate-fade-down" : "opacity-0"} `}
    >
      <div className="flex justify-between py-3 md:p-4 mx-4">
        <Link to="main" spy={true} smooth={true} offset={50} duration={200}>
          <img
            src={logo}
            alt="logo"
            className="w-[180px] md:w-[200px] md:ml-7 cursor-pointer"
          />
        </Link>

        {/* <a href="#main" className="text-black">
          <h1 className=" font-inter text-3xl md:text-5xl lg:text-6xl md:ml-7 2xl:ml-28 font-extrabold  cursor-pointer animate-fade-right">
            EPSILON <span className="text-red-700">X</span>
          </h1>
        </a> */}
        <div className="md:hidden">
          {isClicked ? (
            <IoMdArrowDropdownCircle
              size={35}
              onClick={() => setIsClicked((prev) => !prev)}
              className="dd "
            />
          ) : (
            <IoMdArrowDropdown
              size={35}
              onClick={() => setIsClicked((prev) => !prev)}
              className="dd"
            />
          )}

          <ul
            className={
              isClicked
                ? "absolute top-[70px] left-0 h-screen w-full  ease-in-out duration-300 bg-black/90  backdrop-blur-sm "
                : "absolute top-[70px] left-[-100%] h-screen  w-full  ease-in-out duration-300 bg-black/90 backdrop-blur-sm "
            }
            onClick={() => setIsClicked((prev) => !prev)}
          >
            <li className="navam">
              <Link
                to="epsi"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                EPSILON X
              </Link>
            </li>
            <li className="navam">
              <Link
                to="why"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Why EPX
              </Link>
            </li>
            <li className="navam">
              <Link
                to="security"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Security
              </Link>
            </li>
            <li className="navam ">
              <Link
                to="presale"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Get Token
              </Link>
            </li>
            <li className="navam ">
              <Link
                to="details"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Allocation
              </Link>
            </li>
            <li className="navam ">
              <Link
                to="protocol"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                className="a"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Protocol
              </Link>
            </li>
          </ul>
        </div>

        <ul className="navul  ">
          <li className="p-1  hover:scale-105 m-auto">
            <Link
              to="epsi"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nava"
            >
              EPSILON X
            </Link>
          </li>
          <li className="p-1  hover:scale-105 m-auto">
            <Link
              to="why"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nava"
            >
              Why EPX
            </Link>
          </li>
          <li className="p-1  hover:scale-105 m-auto">
            <Link
              to="security"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nava"
            >
              Security
            </Link>
          </li>
          <li className="p-1  hover:scale-105 m-auto">
            <Link
              to="presale"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nava"
            >
              Get Token
            </Link>
          </li>
          <li className="p-1   hover:scale-105 m-auto">
            <Link
              to="details"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
              className="nava"
            >
              Allocation
            </Link>
          </li>
          <li className="p-1  hover:scale-x-110 m-auto">
            <Link
              to="protocol"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
              className="nava"
            >
              Protocol
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navigation;

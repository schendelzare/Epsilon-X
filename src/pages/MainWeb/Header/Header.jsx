import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";
import img from "../../../assets/myAssets/blood.png";
import logo from "../../../assets/myAssets/epsilon2a.png";

const Header = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  return (
    <section className="section1 relative " id="main">
      <div className="px py-2 w-full">
        <div className=" absolute  w-[250px]  top-[120px] md:top-[90px]  fs:top-24 inset-y-50 md:w-[700px] m-auto left-0 right-0 md:right-16  -z-10 md:opacity-70">
          <img
            src={img}
            alt="bloodimage"
            ref={ref1}
            className={` ${
              isVisible1 ? "animate-fade" : "opacity-0"
            } w-full animate-delay-1000`}
          />
        </div>
        <div className="">
          <div className="m-auto ">
            <h1
              ref={ref2}
              className={`${
                isVisible2 ? "animate-fade-down" : "opacity-0"
              } h1m animate-delay-800`}
            >
              <img
                src={logo}
                alt="logo"
                className="text-center m-auto w-[200px] md:w-[350px]"
              />
              <br /> Redefining the Future of Digital Finance
            </h1>
            <p
              ref={ref3}
              className={`${
                isVisible3 ? "animate-fade-left" : "opacity-0"
              } text-black  md:text-base font-medium mb-[50px]  animate-delay-500 `}
            >
              Welcome to the official website of Epsilon X Token, your gateway
              to the future of decentralized finance and blockchain technology.
              Here, we provide you with comprehensive information about Epsilon
              X Token, its mission, and the innovative solutions it brings to
              the world of cryptocurrencies and blockchain.
            </p>
            <div
              ref={ref4}
              className={`${
                isVisible4 ? "animate-fade-up" : "opacity-0"
              } btna  animate-delay-1000`}
            >
              <a href="#presale" className="text-3xl">
                GET EPSILON <span className="text-red-700 ">X</span> NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

// 🛡️ Behold, the Legendary Token EpsilonX! 🏛️ Embark on a Mythic
//             Investment Odyssey as you align with the gods of crypto prosperity.
//             EpsilonX, named after the revered epsilon symbol, symbolizing
//             infinity, beckons brave investors to partake in a journey of
//             boundless gains. Just as the ancient Greek heroes ventured into the
//             unknown, venture into the realm of EpsilonX and forge your own saga
//             of financial triumph. Join the pantheon of savvy investors who grasp
//             the reins of destiny and stake their claim in the saga of EpsilonX!
//             // ⚔️🌟

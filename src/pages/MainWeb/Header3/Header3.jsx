import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";
import img from "../../../assets/myAssets/4.png";

const Header3 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <section className="sectiony " id="security">
      <div className="px">
        <div className="sx">
          <div className="relative  w-full">
            <img
              src={img}
              alt="img"
              ref={ref1}
              className={`${
                isVisible1 ? "animate-fade-up" : "opacity-0"
              } animate-delay-300 m-auto`}
            />
            <div className="absolute bdw m-auto left-0 right-0 top-0 bottom-0 bdy h-96 w-96 -z-30 " />
          </div>
          <div className="m-auto">
            <h1
              ref={ref2}
              className={`${
                isVisible2 ? "animate-fade-right" : "opacity-0"
              } cardh3 py-5 animate-delay-900`}
            >
              Security and Transparency 🔐🛡️
            </h1>
            <div className="">
              <p
                ref={ref3}
                className={`${
                  isVisible3 ? "animate-fade-left" : "opacity-0"
                } card  animate-delay-800`}
              >
                At EpsilonX Token, security is our top priority. We implement
                robust security measures, conduct regular audits, and adhere to
                best practices to protect your funds and data. Our
                blockchain-based infrastructure guarantees transparency,
                allowing you to verify transactions and smart contract
                interactions on the Ethereum blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header3;

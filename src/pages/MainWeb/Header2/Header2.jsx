import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";
import img from "../../../assets/myAssets/1.png";

const Header2 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  return (
    <section className="sectiony  ">
      <div className="px ">
        <div className="sx">
          <div className="m-auto">
            <h1
              ref={ref2}
              className={`${
                isVisible2 ? "animate-fade-up" : "opacity-0"
              } cardh3 animate-delay-100`}
            >
              Why should you buy the{" "}
              <span className="font-permanent  italic text-5xl ">
                Epsilon <span className="text-red-700">X</span>{" "}
              </span>
              token?
            </h1>
            <h3
              ref={ref4}
              className={`${
                isVisible4 ? "animate-fade-up" : "opacity-0"
              }  py-5 font-medium animate-delay-500`}
            >
              By holding Epsilon X tokens, you can engage in these activities,
              potentially earning rewards and passive income.
            </h3>
            <div className="card md:m-auto ">
              <ul
                ref={ref3}
                className={`${
                  isVisible3 ? "animate-fade-left" : "opacity-0"
                }  animate-delay-700 `}
              >
                <li className="text-base font-semibold  list-disc list-inside text-justify   ">
                  Decentralization: 🏛️ We are strong advocates of
                  decentralization. EpsilonX Token is built on the Ethereum
                  blockchain, ensuring trust, security, and transparency in all
                  financial activities.
                </li>
                <li className="text-base font-semibold list-disc list-inside text-justify     ">
                  Empowerment: ⚔️ Our platform is designed to offer financial
                  empowerment to everyone.
                </li>
                <li className="text-base font-semibold list-disc list-inside text-justify   ">
                  Financial: 💰 Whether you're an experienced trader or a novice
                  investor, EpsilonX Token provides a comprehensive range of
                  features to help you achieve your financial goals.
                </li>
                <li className="text-base font-semibold list-disc list-inside text-justify   ">
                  Innovation: ⚖️ Our team of visionary developers and financial
                  experts is continuously exploring innovative solutions to
                  remain at the forefront of the blockchain and DeFi industry.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex w-full">
            <img
              src={img}
              alt="img"
              ref={ref1}
              className={`${
                isVisible1 ? "animate-fade-right" : "opacity-0"
              }  animate-delay-700 m-auto`}
            />
            <div className="absolute bdr m-auto left-0 right-0 top-0 bottom-0 bdy h-96 w-96 -z-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;

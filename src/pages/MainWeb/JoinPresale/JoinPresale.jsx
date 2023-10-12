import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";

import logo from "../../../assets/myAssets/epsilon2.png";
import img from "../../../assets/myAssets/ps.png";
import img1 from "../../../assets/myAssets/5.png";

const JoinPresale = () => {
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <section id="presale" className="sectionpre ">
      <div className="px">
        <div>
          <h1
            ref={ref2}
            className={`${
              isVisible2 ? "animate-fade-down" : "opacity-0"
            } h1m animate-delay-300`}
          >
            <img
              src={logo}
              alt="logo"
              className="text-center m-auto w-[200px] md:w-[350px]"
            />
            <br /> Gain early access to Epsilon X Tokens, ensuring you can
            secure your desired allocation before the general public.
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto">
          <div className="relative">
            <img
              src={img1}
              alt="logo"
              ref={ref3}
              className={`${
                isVisible3 ? "animate-fade-right" : "opacity-0"
              } text-center  m-auto w-full animate-delay-200`}
            />
            <div className="absolute bdb m-auto left-0 right-0 top-0 bottom-0  h-72 w-72 -z-30" />
          </div>

          <div
            ref={ref3}
            className={`${
              isVisible3 ? "animate-jump-in" : "opacity-0"
            } pre animate-delay-300`}
          >
            <div className="flex flex-col h-full justify-between p-4 relative ">
              <h1 className=" text-3xl  my-2 font-extrabold text-center font-inter  border border-black rounded-xl p-2">
                JOIN PRESALE
              </h1>
              <div
                className="border-4 border-white rounded-lg
              "
              >
                <a href="" className="animate-bounce animate-infinite">
                  <button className="button">JOIN PRESALE NOW!</button>
                </a>
              </div>
              {/* <img
                src={img}
                alt="helmet"
                className="absolute m-auto left-0 right-0 top-0 bottom-10  -z-50"
              />{" "} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPresale;

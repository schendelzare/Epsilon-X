import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";
import img from "../../../assets/myAssets/3.png";
import logo from "../../../assets/myAssets/epsilon2.png";

const Header1 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <section className="section " id="epsi">
      <div className="px ">
        <div className="ss">
          <div className="sgrid ">
            <div className="relative">
              {" "}
              <img
                src={img}
                alt="img"
                ref={ref1}
                className={`${
                  isVisible1 ? "animate-fade-up" : "opacity-0"
                } animate-delay-100 m-auto`}
              />
              <div className="absolute bdb m-auto left-0 right-0 top-0 bottom-0  h-72 w-72 -z-30" />
            </div>

            <div className="m-auto">
              <div className="card">
                <h3 className="cardh3">
                  Your Odyssey to Prosperity Begins Here ⚔️🚀🏛️
                </h3>
                <br />
                <p
                  ref={ref2}
                  className={`${isVisible2 ? "animate-fade-up" : "opacity-0"} `}
                >
                  This token was created with a commitment to transparency,
                  security, and community engagement, inviting investors to join
                  the journey towards boundless financial growth. EpsilonX
                  embodies the belief that, like the ancient Greek heroes,
                  individuals can venture into the unknown and script their epic
                  tales of financial success, all while being part of a thriving
                  and supportive EpsilonX community. Welcome to the saga of
                  EpsilonX, where opportunities are infinite, and the future is
                  in your hands." ⚔️🌟💰 token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header1;

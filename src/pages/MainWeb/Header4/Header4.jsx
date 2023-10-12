import React, { useRef } from "react";
import { useIsVisible } from "../useVisible";
import video from "../../../assets/myAssets/video/dmc-trailer.mp4";

const Header4 = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <section className="sectionm">
      <div className="m-auto">
        <video
          src={video}
          autoPlay
          loop
          muted
          ref={ref1}
          className={`${
            isVisible1 ? "animate-flip-down" : "opacity-0"
          } video  animate-delay-800`}
        />
        <h1
          ref={ref2}
          className={`${
            isVisible2 ? "animate-fade-up" : "opacity-0"
          } h1 animate-delay-800`}
        >
          NEW JOURNEY
        </h1>
        <p
          ref={ref3}
          className={`${
            isVisible3 ? "animate-fade-up" : "opacity-0"
          } pn animate-delay-800`}
        >
          We believe that everyone should have access to financial
          opportunities. EpsilonX Token can be easily acquired and traded on
          various exchanges, making it accessible to a global audience.
        </p>
      </div>
    </section>
  );
};

export default Header4;

import React from "react";
import img from "../../../assets/myAssets/7.png";

const SemiFooter = () => {
  return (
    <section className="sectionallo" id="details">
      <div className="px">
        <div className=" p-4 rounded-2xl w-full">
          <h1 className="text-4xl font-bold p-8 ">
            Claim, Buy & HODL $EPSILON <span className="text-red-700 ">X</span>!
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="relative">
              {" "}
              <img src={img} alt="epsilonX" className="w-[400px] m-auto" />
              <div className="absolute bdy m-auto left-0 right-0 top-0 bottom-0  h-72 w-72 -z-30" />
            </div>

            <div className="bg-[#33cccc] p-4 rounded-xl my-2">
              <h1 className="font-semibold text-xl mb-4 ">
                EPSILON <span className="text-red-700 ">X</span> ALLOCATION
              </h1>
              <p className="fp border-white  rounded-lg">
                The initial total supply of EPSILON X tokens ($EPSILON X) at
                mainnet was 1 billion tokens. EPSILON X will have 8 digits of
                precision as part of the fraction where the minimal unit is
                called an Octa.
              </p>
              <div className="m-auto border-white  rounded-lg mt-2 bg-black/90 backdrop-blur-sm">
                <p className="fl">Category - % of Initial Token Distribution</p>

                <p className="fl">Community - 51.02%</p>

                <p className="fl">Core Contributors - 19.00%</p>

                <p className="fl">Foundation - 16.50%</p>

                <p className="fl">Investors - 13.48%</p>
              </div>
            </div>
            <div className="flex flex-col  p-4 rounded-xl lg:m-2 bg-[#33cccc]">
              <h1 className="font-semibold text-xl ">Token Details</h1>
              <ul className="text-white text-left flex flex-col gap-3  m-4 bg-black/90 backdrop-blur-sm  rounded-lg p-4 ">
                <li>Name - EPSILON X</li>
                <li>Symbol - $EPSILON X</li>
                <li>Decimal - 10</li>
                <li>Supply - 1 Billion</li>
              </ul>
              <pre className="p-4 my-auto bg-white m-4 overflow-x-auto">
                Contract Address - 0x71711E1270c4DEe3d47BbfFC00bbd22137bBfaEe
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemiFooter;

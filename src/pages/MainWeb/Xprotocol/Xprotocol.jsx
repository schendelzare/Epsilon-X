import React from "react";
import img from "../../../assets/myAssets/8.png";
import img1 from "../../../assets/myAssets/9.png";

const Xprotocol = () => {
  return (
    <section className="section bg-[#33cccc96]" id="protocol">
      <div className="bg-blue-400/70 m-auto p-4 ">
        <div className="flex flex-col lg:flex-row gap-4 m-auto ">
          <div className="m-auto">
            <img src={img1} alt="epsilonX" className=" " />
          </div>

          <div className="flex flex-col m-auto gap-4">
            <h2 className="h1p">
              EPSILON <span className="text-red-700 ">X</span> Protocol
            </h2>
            <p className="pp">
              → EPSILON X is a governance and utility token used within the
              EPSILON X ecosystem to empower a decentralized community building
              at the forefront of web3.
            </p>
            <p className="pp">
              → EPSILON X was launched as the base layer to foster developments
              within the EPSILON X Ecosystem.
            </p>
            <p className="pp">
              → $EPSILON X is the ecosystem’s governance token, allowing EPSILON
              X holders to participate in.
            </p>

            <p className="pp">
              → EPSILON X provides access to certain parts of the ecosystem that
              are otherwise unavailable, such as exclusive games, merch, events,
              and services.
            </p>
            <p className="pp">
              → EPSILON X is a tool for third-party developers to participate in
              the ecosystem by incorporating $EPSILON X into services, games,
              and other projects.
            </p>
          </div>
          <div className="m-auto">
            <img src={img} alt="epsilonX" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Xprotocol;

import React from "react";
import x from "../Assects/Mask_Group_33.png";
import y from "../Assects/Mask_Group_34.png";
import z from "../Assects/Mask_Group_35@2x.png";
export default function Coopratestr() {
  return (
    <div>
      <section className="cooprate">
        <div className="con_cont">
          <h2> CORPORATE STRUCTURE</h2>
          <div class="leveraging-our-knowlleelawadeeui-regular-normal-big-stone-20px knowl">
            Leveraging our knowledge of business, we’re able to create
            superlative solutions that integrate more than just the
            state-of-the-art technology. There’s tremendous value in
            manufacturing innovative products that match to the current needs of
            genuine organic and residue free inputs for Agriculture,
            Horticultural, Floriculture, Tea and Spices farming. Kay Bee
            Bio-Organics offer a complete solution in Agriculture to help
            farmers meet their challenges in the field every season.
          </div>
        </div>
        {/* <img src={coop} alt=" coop" /> */}

        <div className="row">
          <div className="col-md-4 circle">
            {" "}
            <img src={x} alt="mark " />
            <h3>Prakash Khakhar</h3>
            <p>Mentor</p>

          </div>
          <div className="col-md-4 circle">
            <img src={y} alt="mark" />
            <h3>Kaushal Khakhar</h3>
            <p>Executive Chairman</p>

          </div>
          <div className="col-md-4 circle">
            {" "}
            <img src={z} alt="mark" />
            <h3>Sachin Yadav</h3>
            <p>Managing Director</p>

          </div>
        </div>
      </section>
    </div>
  );
}

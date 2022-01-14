import React from "react";
import "./styles.scss";

import Eu from "../../img/eu.svg";
import Foto from "../../img/foto.svg";
import Pincel from "../../img/pincel.svg";
import Play from "../../img/play.svg";
import Quadrado from "../../img/quadrado.svg";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        {/* Columa 1 */}
        <div className="i-left-wrapper">
          <h1 className="i-name">I’m Davi Sousa.A web developer </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                <img src={Quadrado} className="i-title-item-img" /> Web
                Developer
              </div>
              <div className="i-title-item">
                {" "}
                <img src={Pincel} className="i-title-item-img" />
                Ui/UX Designer
              </div>
              <div className="i-title-item">
                <img src={Foto} className="i-title-item-img" />
                Photographer
              </div>
              <div className="i-title-item">
                <img src={Play} className="i-title-item-img" />
                Content Creator
              </div>
            </div>
          </div>
          <h2 className="i-intro">based in Brazil</h2>

          <p className="i-desc">
            I’m probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>
      </div>
      <div className="i-right">
        {/* Columa 2 */}

        <div className="i-bg"></div>
        <img src={Eu} alt="" className="i-img" />
      </div>
    </div>
  );
}

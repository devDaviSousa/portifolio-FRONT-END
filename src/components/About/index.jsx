import React from "react";
import "./styles.scss";

import Award from "../../img/award.png";

export default function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1641375742328-5a29846f6f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjEyNTg1Ng&ixlib=rb-1.2.1&q=80&w=1080"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-rigth">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          With skills in over 4 different fields of design, I am the perfect
          much take on any challenge.
        </p>
        <p className="a-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          ducimus magnam autem et nulla facilis laborum. Repellendus, enim ut
          assumenda animi dignissimos perferendis ad, recusandae minima, nisi
          non ipsam inventore.
        </p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />

          <div className="a-award-texts">
            <h4 className="a-award-title">International</h4>

            <p className="a-award-desc">
              Lorem ipsum dolor sit amet ias vel vero? Ad, eveniet sint!
              Consectetur voluptas, sit doloremque nulla reiciendis id, magnam
              labore impedit itaque voluptatem illo ipsam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

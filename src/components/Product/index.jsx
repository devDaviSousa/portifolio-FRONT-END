import React from "react";
import "./styles.scss";

export default function Product({ img, link }) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle yellow"></div>
        <div className="p-circle gray"></div>
      </div>
      <a href={link} target="_blank">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
}

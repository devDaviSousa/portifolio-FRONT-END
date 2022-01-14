import React from "react";
import "./styles.scss";

import Product from "../Product";

import { products } from "../../data";

export default function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          nesciunt voluptas repellendus autem, modi aut porro quos praesentium
          sunt, consectetur minima amet excepturi. Vel numquam delectus nulla
          rerum, quisquam consequuntur.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

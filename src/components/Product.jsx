import React from "react";
import Book from "./Book";
import Echo from "./Echo";
import Ipad from "./Ipad";
import Lcd from "./Lcd";
import Mixer from "./Mixer";
import Watch from "./watch";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Watch />
      </div>
      <div class="product_row d-flex">
        <Echo />
        <Ipad />
      </div>
      <div class="product_row d-flex">
        <Lcd />
      </div>
    </div>
  );
}

export default Product;

import React from "react";

function Mixer() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>
          Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with
          K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
        </p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>2000</span>
        </p>
      </div>
      <ul class="rating d-flex">
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="far fa-star"></i>
        </li>
      </ul>
      <div class="product_img d-flex">
        <img src="assets/product2.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="#">
          <button>Add To Busket</button>
        </a>
      </div>
    </div>
  );
}

export default Mixer;

import React from "react";

function Ipad() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>
          New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)
        </p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>10000</span>
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
        <img src="assets/product5.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="#">
          <button>Add To Busket</button>
        </a>
      </div>
    </div>
  );
}

export default Ipad;

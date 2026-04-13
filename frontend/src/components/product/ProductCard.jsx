import React from "react";

function ProductCard({ name, price, image, category }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <div className="brand">{category}</div>

        <div className="title">{name}</div>

        <div className="rating">⭐ 4.5</div>

        <div className="price">
          ${price} <span className="old-price">$99</span>
        </div>

        <div className="stock in-stock">In Stock</div>

        <div className="shipping">Free shipping</div>

        <a className="btn-sm" href="#">
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ProductCard;

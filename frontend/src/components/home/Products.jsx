import React, { useEffect } from "react";

function Products() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
      });
  }, []);
  return (
    <>
      <div className="section-title">
        <h2>Trending Products</h2>
      </div>

      <div className="products">
        <div className="card">
          <img src="https://picsum.photos/400/300?1" />
          <div className="card-body">
            <div className="brand">Apple</div>
            <div className="title">iPhone 14 Pro</div>
            <div className="price">$999</div>
            <a className="btn-sm" href="#">
              Add to cart
            </a>
          </div>
        </div>

        <div className="card">
          <img src="https://picsum.photos/400/300?2" />
          <div className="card-body">
            <div className="brand">Samsung</div>
            <div className="title">Galaxy S23</div>
            <div className="price">$899</div>
            <a className="btn-sm" href="#">
              Add to cart
            </a>
          </div>
        </div>

        <div className="card">
          <img src="https://picsum.photos/400/300?3" />
          <div className="card-body">
            <div className="brand">Dell</div>
            <div className="title">Inspiron Laptop</div>
            <div className="price">$749</div>
            <a className="btn-sm" href="#">
              Add to cart
            </a>
          </div>
        </div>

        <div className="card">
          <img src="https://picsum.photos/400/300?4" />
          <div className="card-body">
            <div className="brand">Nike</div>
            <div className="title">Running Shoes</div>
            <div className="price">$120</div>
            <a className="btn-sm" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

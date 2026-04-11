import React from "react";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <div className="slides">
        <div className="slide active">
          <div className="overlay"></div>
          <img src="https://picsum.photos/id/1018/1200/400" />
          <div className="caption">
            <h1>Shop Smart, Live Better 🛒</h1>
            <p>Best deals on electronics, fashion, gaming & more</p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className="slide">
          <div className="overlay"></div>
          <img src="https://picsum.photos/id/1015/1200/400" />
          <div className="caption">
            <h1>🔥 Today’s Deal</h1>
            <p>Up to 50% off on premium electronics and accessories.</p>
            <a href="#">Explore</a>
          </div>
        </div>

        <div className="slide">
          <div className="overlay"></div>
          <img src="https://picsum.photos/id/1016/1200/400" />
          <div className="caption">
            <h1>New Arrivals</h1>
            <p>Latest gadgets, fashion & lifestyle products</p>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>

      <button className="prev">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="next">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default HeroSlider;

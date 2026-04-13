import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide>
          <div className="slide">
            <div className="overlay"></div>
            <img src="https://picsum.photos/id/1018/1200/400" />
            <div className="caption">
              <h1>Shop Smart, Live Better 🛒</h1>
              <p>Best deals on electronics</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="overlay"></div>
            <img src="https://picsum.photos/id/1015/1200/400" />
            <div className="caption">
              <h1>🔥 Today’s Deal</h1>
              <p>Up to 50% off</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="overlay"></div>
            <img src="https://picsum.photos/id/1016/1200/400" />
            <div className="caption">
              <h1>New Arrivals</h1>
              <p>Latest gadgets, fashion & lifestyle products</p>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;

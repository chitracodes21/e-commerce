import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import CategoryGrid from "../components/category/CategoryGrid";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

function Home() {
  return (
    <div className="container">
      <HeroSlider />
      <Categories/>
      <Products/>
    </div>
  );
}

export default Home;

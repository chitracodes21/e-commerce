import React from "react";
import HeroSlider from "../components/hero/HeroSlider";
import Categories from "../components/category/Categories";
import ProductList from "../components/product/ProductList";


function Home() {
  return (
    <div className="container">
      <HeroSlider/>
      <Categories/>
      <ProductList/>
    </div>
  );
}

export default Home;

import React from "react";

function Categories() {
  return (
    <>
      <div className="section-title">
        <h2>Categories</h2>
      </div>

      <div className="categories">
        <a href="#" className="cat">
          <i className="fas fa-mobile"></i>
          <div>Mobiles</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-laptop"></i>
          <div>Laptops</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-shoe-prints"></i>
          <div>Shoes</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-clock"></i>
          <div>Watches</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-briefcase"></i>
          <div>Bags</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-gamepad"></i>
          <div>Gaming</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-dumbbell"></i>
          <div>Fitness</div>
        </a>
        <a href="#" className="cat">
          <i className="fas fa-blender"></i>
          <div>Appliances</div>
        </a>
      </div>
    </>
  );
}

export default Categories;

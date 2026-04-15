import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <div className="container header">
          <div className="logo">NovaMart</div>

          <div className="search">
            <input placeholder="Search products..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="actions">
            <div className="icon">
              <i className="far fa-user"></i>
            </div>
            <div className="icon">
              <i className="far fa-heart"></i>
              <span className="badge">2</span>
            </div>
            <div className="icon">
              <i className="fas fa-cart-shopping"></i>
              <span className="badge">3</span>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;

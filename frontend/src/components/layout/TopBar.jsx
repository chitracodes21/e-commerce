import React from "react";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <span>
          <i className="fas fa-truck"></i> Free Shipping Over $50
        </span>
        <span>
          <i className="fas fa-lock"></i> Secure Checkout
        </span>
      </div>
    </div>
  );
}

export default TopBar;

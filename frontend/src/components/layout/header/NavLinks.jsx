import React from "react";
import { Link } from "react-router";

function NavLinks() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "New", to: "/" },
    { label: "Categories", to: "/" },
    { label: "Contact", to: "/" },
  ];
  return (
    <nav>
      <div className="container nav">
        {navLinks.map((link)=>{
            return <Link to={link.to}>{link.label}</Link>
        })}
      </div>
    </nav>
  );
}

export default NavLinks;

import React from "react";
import { Link } from "react-router";

function NavLinks() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "New", to: "/" },
    { label: "Categories", to: "/" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <nav>
      <div className="container nav">
        {navLinks.map((link, i) => {
          return (
            <Link key={i} to={link.to}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavLinks;

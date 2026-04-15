import React from "react";
import FooterHeading from "./FooterHeading";
import FooterLinkList from "./FooterLinkList";

function CategoryLinks() {
  const categoryLinks = [
    { label: "Electronics", href: "#" },
    { label: "Men's Fashion", href: "#" },
    { label: "Women's Wear", href: "#" },
    { label: "Home & Living", href: "#" },
    { label: "Sports & Outdoors", href: "#" },
  ];
  return (
    <div className="footer-col">
      <FooterHeading heading={"Categories"} />
      <FooterLinkList footerLinks={categoryLinks} />
    </div>
  );
}

export default CategoryLinks;

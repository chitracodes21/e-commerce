import React from "react";
import { Link } from "react-router";

function FooterLinkList({ footerLinks }) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <ul>
      {footerLinks.map((link,i) => {
        return (
          <li key={i}>
            <Link to={link.href} onClick={scrollToTop}>
              <i className="fas fa-chevron-right"></i> {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterLinkList;

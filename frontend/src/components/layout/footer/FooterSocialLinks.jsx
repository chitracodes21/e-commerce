import React from "react";

function FooterSocialLinks() {
  const socialMediaLinks = [
    {
      href: "#",
      icon: "fab fa-facebook-f",
    },
    {
      href: "#",
      icon: "fab fa-twitter",
    },
    {
      href: "#",
      icon: "fab fa-instagram",
    },
    {
      href: "#",
      icon: "fab fa-youtube"
    },
  ];
  return (
    <div className="social-links">
      {socialMediaLinks.map((link)=>{
        return <a href={link.href}>
        <i className={link.icon}></i>
      </a>
      })}
    </div>
  );
}

export default FooterSocialLinks;

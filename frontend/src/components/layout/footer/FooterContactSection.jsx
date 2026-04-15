import React from "react";
import FooterHeading from "./FooterHeading";
import ContactInfo from "./ContactInfo";
import NewsletterForm from "./NewsletterForm";

function FooterContactSection() {
  return (
    <div className="footer-col">
      <FooterHeading heading={"Stay Updated"} />
      <ContactInfo/>
      <NewsletterForm/>
    </div>
  );
}

export default FooterContactSection;

import FooterHeading from "./FooterHeading";
import FooterLinkList from "./FooterLinkList";

function QuickLinks() {
  const quickLinks = [
    { label: "About Us", href: "about" },
    { label: "Contact Us", href: "contact" },
    { label: "Careers", href: "careers" },
    { label: "Sustainability", href: "sustainability" },
    { label: "FAQ", href: "faq" },
  ];
  return (
    <div className="footer-col">
      <FooterHeading heading={"Quick Links"} />
      <FooterLinkList footerLinks={quickLinks}/>
    </div>
  );
}

export default QuickLinks;

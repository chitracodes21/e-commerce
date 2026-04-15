import FooterHeading from "./FooterHeading";
import FooterLinkList from "./FooterLinkList";

function QuickLinks() {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Returns Policy", href: "#" },
    { label: "FAQ", href: "#" },
  ];
  return (
    <div className="footer-col">
      <FooterHeading heading={"Quick Links"} />
      <FooterLinkList footerLinks={quickLinks}/>
    </div>
  );
}

export default QuickLinks;

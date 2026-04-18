import useInView from "../../hooks/useInView";
import ContactInfoCard from "./ContactInfoCard";
import { contactAddress, contactEmail, contactPhone } from "./data/contactData";

function ContactInfoGrid() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`contact-info-grid ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <ContactInfoCard
        icon={contactAddress.icon}
        title={contactAddress.title}
        line1={contactAddress.addressLine1}
        line2={contactAddress.addressLine2}
        line3={contactAddress.addressLine3}
      />

      <ContactInfoCard
        icon={contactPhone.icon}
        title={contactPhone.title}
        line1={contactPhone.phone}
        line2={contactPhone.phoneLabel}
        line3={contactPhone.phoneLink}
      />

      <ContactInfoCard
        icon={contactEmail.icon}
        title={contactEmail.title}
        line1={contactEmail.primaryEmail}
        line2={contactEmail.supportEmailLink}
        line3={contactEmail.responseTime}
      />
    </div>
  );
}

export default ContactInfoGrid;

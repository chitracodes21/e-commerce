import React from "react";

function ContactInfo() {
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      text: "123 Commerce St, NYC",
    },
    {
      icon: "fas fa-envelope",
      text: "hello@novamart.com",
    },
    {
      icon: "fas fa-phone-alt",
      text: "+1 (888) 789-1234",
    },
  ];
  return (
    <ul>
      {contactInfo.map((info,i) => {
        return (
          <li key={i}>
            <i className={info.icon}></i> {info.text}
          </li>
        );
      })}
    </ul>
  );
}

export default ContactInfo;

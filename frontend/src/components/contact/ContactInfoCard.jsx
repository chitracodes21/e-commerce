function ContactInfoCard({ icon, title, line1, line2, line3 }) {
  return (
    <>
      <div className="info-card">
        <div className="info-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>
          {line1}
          <br />
          {line2}
          <br />
          {line3}
        </p>
      </div>
    </>
  );
}

export default ContactInfoCard;

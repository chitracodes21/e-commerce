import useInView from "../../hooks/useInView";
import Button from "../shared/Button";
import InputField from "../shared/InputField";
import SelectField from "../shared/SelectField";
import TextAreaField from "../shared/TextAreaField";

function ContactFormSection() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`form-card ${isVisible ? "fade-in-left" : ""}`}
      style={{ animationDelay: "0.4s" }}
    >
      <h2>Send us a message</h2>
      <p>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form>
        <InputField
          label={"Full Name *"}
          type={"text"}
          placeholder={"John Doe"}
        />
        <InputField
          label={"Email Address *"}
          type={"email"}
          placeholder={"hello@example.com"}
        />
        <SelectField />
        <InputField
          label={"Message *"}
          type={"email"}
          placeholder={"hello@example.com"}
        />
        <TextAreaField />
        <Button />
      </form>
    </div>
  );
}

export default ContactFormSection;

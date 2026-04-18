import React from "react";

function SelectField() {
  return (
    <div className="form-group">
      <label>Subject</label>
      <select>
        <option>General Inquiry</option>
        <option>Order Status</option>
        <option>Returns & Refunds</option>
        <option>Partnership Opportunity</option>
        <option>Technical Support</option>
      </select>
    </div>
  );
}

export default SelectField;

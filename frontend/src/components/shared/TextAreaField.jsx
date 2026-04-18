import React from "react";

function TextAreaField() {
  return (
    <div className="form-group">
      <label>Message *</label>
      <textarea rows="5" placeholder="Tell us how we can help..." />
    </div>
  );
}

export default TextAreaField;

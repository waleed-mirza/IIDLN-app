import React from "react";

function SubmitInput({ name }) {
  return (
    <div className="input-container">
      <input type="submit" value={name} className="submit-type" />
    </div>
  );
}

export default SubmitInput;

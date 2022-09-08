import React from "react";
import PropTypes from "prop-types";

export const Answer = ({ text, onChange }) => (
  <div>
    <input type="radio" className="submit-answer" onChange={() => onChange()} />
    {text}
  </div>
);

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

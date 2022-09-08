import React from "react";
import PropTypes from "prop-types";

export const Submit = ({ onSubmit }) => (
  <div>
    <button
      className="submit-answer"
      onClick={() => {
        onSubmit();
      }}
    >
      Submit
    </button>
  </div>
);

Submit.propTypes = {
  onSubmit: PropTypes.func
};

Submit.defaultProps = {
  onSubmit: () => true
};

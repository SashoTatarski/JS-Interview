import React from "react";
import PropTypes from "prop-types";
import { Button } from "../layout";

export const Submit = ({ onSubmit }) => (
  <div>
    <Button
      className="submit-answer"
      onClick={() => {
        onSubmit();
      }}
    >
      Submit
    </Button>
  </div>
);

Submit.propTypes = {
  onSubmit: PropTypes.func
};

Submit.defaultProps = {
  onSubmit: () => true
};

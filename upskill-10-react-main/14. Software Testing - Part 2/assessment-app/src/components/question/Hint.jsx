import React from "react";
import PropTypes from "prop-types";

export const Hint = ({ text }) => <div>{text}</div>;

Hint.propTypes = {
  text: PropTypes.string.isRequired
};

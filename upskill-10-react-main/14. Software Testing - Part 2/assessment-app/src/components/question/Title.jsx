import React from "react";
import PropTypes from "prop-types";

export const Title = ({ text }) => <div>{text}</div>;

Title.propTypes = {
  text: PropTypes.string.isRequired
};
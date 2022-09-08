import React from "react";
import PropTypes from "prop-types";
import { H2 } from "../layout";

export const Title = ({ text }) => <H2>{text}</H2>;

Title.propTypes = {
  text: PropTypes.string.isRequired
};

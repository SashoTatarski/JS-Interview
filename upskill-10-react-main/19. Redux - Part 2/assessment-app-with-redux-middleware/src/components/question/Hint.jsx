import React from "react";
import PropTypes from "prop-types";
import { Text } from "../layout";

export const Hint = ({ text }) => <Text>{text}</Text>;

Hint.propTypes = {
  text: PropTypes.string.isRequired
};

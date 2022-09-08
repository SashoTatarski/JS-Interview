import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Placeholder = styled.div`
  padding: 0.25em;
`;

export const Answer = ({ id, text, onChange }) => (
  <Placeholder>
    <input
      type="radio"
      name="selected-answer"
      className="submit-answer"
      onChange={() => onChange(id)}
    />
    <label>{text}</label>
  </Placeholder>
);

Answer.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

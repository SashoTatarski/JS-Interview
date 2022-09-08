import React from "react";
import { Hint } from "./Hint";
import { Title } from "./Title";
import { Answer } from "./Answer";
import { Submit } from "./Submit";
import PropTypes from "prop-types";

export const Question = ({ question: { hint, title, answers } }) => (
  <div>
    <Hint text={hint} />
    <Title text={title} />
    {answers.map(({ id, text }) => (
      <Answer key={id} text={text} onChange={() => console.log("Changed!")} />
    ))}
    <Submit />
  </div>
);

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hint: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

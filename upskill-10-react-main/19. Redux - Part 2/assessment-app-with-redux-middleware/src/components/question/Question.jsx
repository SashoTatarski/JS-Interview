import PropTypes from "prop-types";
import React from "react";
import { Flex } from "../layout";
import { Answer } from "./Answer";
import { Hint } from "./Hint";
import { Submit } from "./Submit";
import { Title } from "./Title";

export const Question = ({ question: { hint, title, answers }, onAnswerSelect }) => (
  <Flex.Row direction="column">
    <Flex.Column>
      <Hint text={hint} />
    </Flex.Column>
    <Flex.Column>
      <Title text={title} />
    </Flex.Column>

    {answers.map(({ id, text }) => (
      <Flex.Column key={id}>
        <Answer id={id} text={text} onChange={onAnswerSelect} />
      </Flex.Column>
    ))}
    <Submit />
  </Flex.Row>
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
  }).isRequired,
  onAnswerSelect: PropTypes.func.isRequired
};

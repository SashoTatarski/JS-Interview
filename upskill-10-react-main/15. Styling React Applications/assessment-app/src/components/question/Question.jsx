import React from "react";
import { Flex } from "../layout";
import { Answer } from "./Answer";
import { Hint } from "./Hint";
import { Submit } from "./Submit";
import { Title } from "./Title";

export const Question = ({ question: { hint, title, answers } }) => (
  <Flex.Row direction="column">
    <Flex.Column>{hint && <Hint text={hint} />}</Flex.Column>
    <Flex.Column>{title && <Title text={title} />}</Flex.Column>
    {answers.map(({ id, text }) => (
      <Flex.Column>
        <Answer id={id} text={text} />
      </Flex.Column>
    ))}
    <Submit />
  </Flex.Row>
);

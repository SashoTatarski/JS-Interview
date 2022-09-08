import React from "react";

export const SelectedAnswer = ({ answer }) =>
  answer ? `Selected answer: ${answer}` : "No answer selected";

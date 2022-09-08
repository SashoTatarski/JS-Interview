import { SELECT_ANSWER } from "./constants";

export const selectAnswer = (answer) => ({
  type: SELECT_ANSWER,
  answer
});

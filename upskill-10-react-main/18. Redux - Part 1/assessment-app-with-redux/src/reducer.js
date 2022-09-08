import { SELECT_ANSWER } from "./components/question/constants";
import { QUESTION } from "./fixtures/question";

const defaultState = {
  question: QUESTION,
  selectedAnswer: null
};

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return {
        ...state,
        selectedAnswer: action.answer
      };
    default:
      return state;
  }
}

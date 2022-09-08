import { SELECT_ANSWER } from "./components/question/constants";
import { FETCH_USER } from "./components/user/constants";
import { QUESTION } from "./fixtures/question";

const defaultState = {
  question: QUESTION,
  selectedAnswer: null,
  user: null
};

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return {
        ...state,
        selectedAnswer: action.answer
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

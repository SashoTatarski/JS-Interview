import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { SELECT_ANSWER } from "./components/question/constants";
import rootReducer from "./reducer";

const CustomMiddleware = (store) => (next) => (action) => {
  if (action.type === SELECT_ANSWER) {
    console.log(`Custom middleware: ${JSON.stringify(store.getState(), null, 4)}`);
  }

  next(action);
};

export default createStore(rootReducer, applyMiddleware(CustomMiddleware, thunk));

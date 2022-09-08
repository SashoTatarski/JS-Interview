import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./App.css";
import { Question } from "./components/question/Question";
import { QUESTION } from "./fixtures/question";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Question question={QUESTION} />
      </div>
    );
  }
}

export default hot(App);

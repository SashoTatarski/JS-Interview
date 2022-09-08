import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { Flex } from "./components/layout";
import { Question } from "./components/question/Question";
import { QUESTION } from "./fixtures/question";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Flex.Row direction="column">
          <Flex.Column>Header</Flex.Column>
          <Flex.Column>
            <Question question={QUESTION} />
          </Flex.Column>
        </Flex.Row>
      </div>
    );
  }
}

export default hot(App);

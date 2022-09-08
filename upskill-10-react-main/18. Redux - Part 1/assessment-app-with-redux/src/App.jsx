import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { Flex } from "./components/layout";
import { Question } from "./components/question";
import { SelectedAnswer } from "./components/selectedAnswer";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Flex.Row direction="column">
          <Flex.Column>Header</Flex.Column>
          <Flex.Column>
            <Question />
          </Flex.Column>
          <Flex.Column>
            <SelectedAnswer />
          </Flex.Column>
        </Flex.Row>
      </div>
    );
  }
}

export default hot(App);

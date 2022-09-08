import React from "react";
import { shallow } from "enzyme";
import { Question } from "./Question";
import { Hint } from "./Hint";
import { Title } from "./Title";
import { Answer } from "./Answer";
import { Submit } from "./Submit";
import { QUESTION } from "../../fixtures/question";

describe("Test Component: <Question />", () => {
  it("should render question component", () => {
    const wrapper = shallow(<Question question={QUESTION} />);

    expect(wrapper.contains(<Hint text="My Hint" />)).toEqual(true);
    expect(wrapper.contains(<Title text="My Title" />)).toEqual(true);
    expect(wrapper.contains(<Answer />)).toEqual(true);
    expect(wrapper.contains(<Submit />)).toEqual(true);
  });

  it("should verify passing props to question component", () => {
    // TBA
  });
});

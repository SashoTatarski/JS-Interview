import React from "react";
import { shallow, mount } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import { Question } from "./Question";
import { Hint } from "./Hint";
import { Title } from "./Title";
import { Answer } from "./Answer";
import { Submit } from "./Submit";
import { render } from "@testing-library/react";
import { QUESTION } from "../../fixtures/question";

describe("Test rendering components", () => {
  it("should render question component without crashing", () => {
    shallow(<Question question={QUESTION} />);
  });

  it("should render <Hint /> component without crashing", () => {
    const wrapper = shallow(<Question question={QUESTION} />);

    expect(wrapper.contains(<Hint text={QUESTION.hint} />)).toEqual(true);
  });

  it("should render <Title /> component without crashing", () => {
    const wrapper = shallow(<Question question={QUESTION} />);

    expect(wrapper.contains(<Title text={QUESTION.title} />)).toEqual(true);
  });

  it("should render <Answer /> component without crashing", () => {
    const wrapper = shallow(<Question question={QUESTION} />);

    expect(wrapper.find("Answer").length).toBe(QUESTION.answers.length);
  });

  it("should render <Answer /> component with radio button", () => {
    const { text } = QUESTION.answers[0];
    const mockFn = jest.fn();

    const wrapper = shallow(<Answer text={text} onChange={mockFn} />);

    expect(wrapper.find("input").length).toBe(1);
  });

  it("should render <Submit /> component without crashing", () => {
    const wrapper = shallow(<Question question={QUESTION} />);

    expect(wrapper.contains(<Submit />)).toEqual(true);
  });
});

describe("Test passing props to components", () => {
  it("should accept question props", () => {
    const question = mount(<Question question={QUESTION} />);

    expect(question.props().question).toEqual(QUESTION);
  });

  it("should accept hint props", () => {
    const expectedText = QUESTION.hint;
    const hint = mount(<Hint text={expectedText} />);

    expect(hint.props().text).toEqual(expectedText);
  });

  it("should accept title props", () => {
    const expectedText = QUESTION.title;
    const title = mount(<Title text={expectedText} />);

    expect(title.props().text).toEqual(expectedText);
  });

  it("should accept answer props", () => {
    const expectedText = QUESTION.answers[0].text;
    const mockFn = jest.fn();
    const answer = mount(<Answer text={expectedText} onChange={mockFn} />);

    expect(answer.props().text).toEqual(expectedText);
  });

  it("should render hint text prop", () => {
    const expectedText = QUESTION.hint;
    const { getByText } = render(<Hint text={expectedText} />);
    const expectedTextRegex = new RegExp(expectedText, "i");
    const hintText = getByText(expectedTextRegex);

    expect(hintText).toBeInTheDocument();
  });

  it("should render title text prop", () => {
    const expectedText = QUESTION.title;
    const { getByText } = render(<Title text={expectedText} />);
    const expectedTextRegex = new RegExp(expectedText, "i");
    const titleText = getByText(expectedTextRegex);

    expect(titleText).toBeInTheDocument();
  });

  it("should render answer text prop", () => {
    const expectedText = QUESTION.answers[0].text;
    const mockFn = jest.fn();

    const { getByText } = render(<Answer text={expectedText} onChange={mockFn} />);
    const expectedTextRegex = new RegExp(expectedText, "i");
    const titleText = getByText(expectedTextRegex);

    expect(titleText).toBeInTheDocument();
  });
});

describe("Test <Question /> component logic", () => {
  it("should click submit button", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Submit onSubmit={mockFn} />);
    wrapper.find(".submit-answer").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });

  it("should click radio button", () => {
    const mockFn = jest.fn();
    const { text } = QUESTION.answers[0];
    const wrapper = shallow(<Answer text={text} onChange={mockFn} />);

    wrapper.find(".submit-answer").simulate("change");
    expect(mockFn).toHaveBeenCalled();
  });
});

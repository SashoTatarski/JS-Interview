import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("Test Component: <App/>", () => {
  it("should render <App /> component without crashing", () => {
    shallow(<App />);
  });

  it("should render <Question /> component without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Question").length).toBe(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("Test Component: <App/>", () => {
  it("should render <Question /> component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Question").length).toBe(1);
  });
});

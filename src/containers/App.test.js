import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("to match the snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

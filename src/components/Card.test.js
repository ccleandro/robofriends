// shallow - ONLY THE COMPONENT, UNIT ensure that your tests aren't indirectly asserting on behavior of child components
// mount - FULL DOM mounts the component in the DOM, it must be run in an environment that at least “looks like” a browser environment - jsdom
// render - STATIC generate HTML from your React tree, and analyze the resulting HTML structure. uses a third party HTML parsing and traversal library Cheerio
import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render 1 Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it("to match the snapshot", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});

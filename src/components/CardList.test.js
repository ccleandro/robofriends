import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("to match the snapshot", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      email: "john@gmail.com"
    },
    {
      id: 2,
      name: "Elvira Tcha Tcha Tcha",
      email: "elvira@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

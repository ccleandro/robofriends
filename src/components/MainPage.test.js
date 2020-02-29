import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
//it runs before anything else
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

///FIRST TEST//
it("to match the snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

//SECOND TEST//
it("filters robots correctly", () => {
  //.instance() then we can use the methods of the component wrapped
  expect(wrapper.instance().filterRobots()).toEqual([]);

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net"
      },
      {
        id: 4,
        name: "Name without what's in the searchField",
        email: "Name@yesenia.net"
      }
    ],
    searchField: "cleme",
    isPending: false
  };
  let wrapper2 = shallow(<MainPage {...mockProps2} />);
  //only one robot filtered
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net"
    }
  ]);
});

//THIRD TEST//
it("filters robots correctly", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net"
      }
    ],
    searchField: "xxx",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

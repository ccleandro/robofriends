import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      error: "",
      robots: [],
      isPending: true
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "Test",
            email: "test@gmail.com"
          },
          {
            id: 321,
            name: "Test2",
            email: "test2@gmail.com"
          }
        ]
      })
    ).toEqual({
      error: "",
      robots: [
        {
          id: 123,
          name: "Test",
          email: "test@gmail.com"
        },
        {
          id: 321,
          name: "Test2",
          email: "test2@gmail.com"
        }
      ],
      isPending: false
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "My Error"
      })
    ).toEqual({
      error: "My Error",
      robots: [],
      isPending: false
    });
  });
});

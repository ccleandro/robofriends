import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";
import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

/* TYPESCRIPT
export interface IRobot {
  name: string,
  id: number,
  email: string
}

interface IAppProps{

}

interface IAppState{
  robots: Array<IRobot>,
  searchfield; string
}

class App extends Component<IAppProps, IAppState> {
*/

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}
//connect() is a high order function, it returns a function. functionReturned(App)
export default connect(mapStateToProps, mapDispatchToProps)(App);

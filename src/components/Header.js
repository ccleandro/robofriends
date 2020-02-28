import React, { Component } from "react";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //console.log("Header will never be updated, be careful", nextProps, nextState);
    return false;
  }

  render() {
    return <h1 className="f1">RoboFriends</h1>;
  }
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <NavLink to="/main">Main Page1</NavLink>
          <NavLink to="/main1">Main Page2</NavLink>
          <NavLink to="/main2">Main Page3</NavLink>
        </ul>
      </div>
    );
  }
}
export default Navigation;

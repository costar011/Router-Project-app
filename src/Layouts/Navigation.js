import React from "react";
import { NavLink, Route } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <NavLink to="/main">Main Page1</NavLink>
        </ul>
      </div>
    );
  }
}
export default Navigation;

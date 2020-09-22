import React from "react";
import "./styles/styles.css";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Main from "./Screens/Main";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Route path="/" component={Navigation} />
        </div>

        <Route exact path="/main" component={Main} />
      </div>
    );
  }
}
export default App;

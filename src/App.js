import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSecond: 0,
    };
  }
  render() {
    const { timeSecond } = this.state;
    return (
      <div className="">
        <div className=""></div>
      </div>
    );
  }
}

export default App;

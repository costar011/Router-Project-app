import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSecond: 0,
      Start: false,
      recode: [],
    };
  }
  render() {
    const { timeSecond } = this.state;
    return (
      <div className="time__Box">
        <div className="time__Box__time">
          <span>{timeSecond}</span>
        </div>

        <div className="time___Box__recode"></div>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./styles/styles.css";

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
    const { timeSecond, recode } = this.state;
    return (
      <div className="timeBox">
        <div className="timeBox__time">
          <span>{timeSecond}</span>
        </div>
        {/*map : 반복 하는 함수*/}
        <div className="timeBox__record">
          <ul>
            {recode.map((code, number) => {
              return <li key={number}>{code}</li>;
            })}
          </ul>
        </div>
        <div className="timerBox__btn">
          <input type="button" value="START"></input>
          <input type="button" value="STOP"></input>
          <input type="button" value="RECODE"></input>
          <input type="button" value="INIT"></input>
        </div>
      </div>
    );
  }
}
export default App;

import React from "react";

class Main1 extends React.Component {
  render() {
    return (
      <div className="main">
        복권 랜덤
        <div className="main__random">
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random1}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
          <button onClick={this._random}>눌러봐!!!</button>
        </div>
      </div>
    );
  }

  _random = () => {
    alert("꽝!!!");
  };

  _random1 = () => {
    alert("당첨!!!");
  };
}

export default Main1;

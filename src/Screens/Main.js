import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        직업을 눌러보세요 .
        <div className="main__job">
          <button onClick={this._policeHandelr}>경찰</button>
          <button onClick={this._teacherHandelr}>교사</button>
          <button onClick={this._devHandelr}>개발자</button>
          <button onClick={this._firefighterHandler}>소방관</button>
          <button onClick={this._doctorHandler}>의사</button>
          <button onClick={this._cookHandelr}>요리사</button>
        </div>
      </div>
    );
  }

  _policeHandelr = () => {
    alert("국민의 안전을 확보해준다");
  };

  _teacherHandelr = () => {
    alert("학생들을 가르친다");
  };

  _devHandelr = () => {
    alert("화면과 기능을 넣어 원하는것을 만들어준다");
  };

  _firefighterHandler = () => {
    alert("불이 나면 불을꺼주고 사람들을 구한다");
  };

  _doctorHandler = () => {
    alert("아픈 사람들을 고쳐준다");
  };

  _cookHandelr = () => {
    alert("음식을 만드는 과정을 담당한다");
  };
}

export default Main;

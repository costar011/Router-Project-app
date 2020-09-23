import React from "react";

class Main2 extends React.Component {
  render() {
    return (
      <div className="main">
        O,X Quiz
        <div className="main__quiz">
          <button onClick={this._quizHandlerx}>
            비행기의 블랙박스는 검은색이다?
          </button>

          <button onClick={this._quizHandlerx}>
            고혈압보다 저혈압이 더 무섭다?
          </button>

          <button onClick={this._quizHandlerx}>
            BUS라는 단어는 미국에서 처음 사용하였다?
          </button>

          <button onClick={this._quizHandlero}>
            인간의 뇌 세포는 재생이 안되는 신체세포이다?
          </button>
        </div>
      </div>
    );
  }

  _quizHandlerx = () => {
    alert("X");
  };

  _quizHandlero = () => {
    alert("O");
  };
}

export default Main2;

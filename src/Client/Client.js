import React from "react";
import App from "../App";
import { HashRouter } from "react-router-dom";

class Client extends React.Component {
  // HashRouter : 주소창에 해쉬(#)가 붙음
  //              새로 고침해도 그대로 나옴 -> #뒤에는 화면에서 읽는 경로이기 때문
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

export default Client;

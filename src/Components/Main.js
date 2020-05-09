import React from "react";
import Insta from "../static/insta.svg";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-bg"></div>
        <div className="main-darken"></div>
        <div className="main-content">
          <div className="side-bar-contact">
            <span>Follow Me</span>
            <img src={Insta} />
          </div>
          <span className="main-topic">deveoper</span>
        </div>
      </div>
    </>
  );
};

export default Main;
